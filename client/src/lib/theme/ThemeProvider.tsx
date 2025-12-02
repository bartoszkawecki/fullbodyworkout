import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getTheme, applyTheme, getDefaultTheme } from './themes';
import { THEME_STORAGE_KEY, type ThemeId } from './types';

interface ThemeContextType {
  themeId: ThemeId;
  setTheme: (themeId: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Get stored theme from localStorage
function getStoredTheme(): ThemeId | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'default' || stored === 'push') {
      return stored as ThemeId;
    }
  } catch (error) {
    console.error('Failed to get stored theme:', error);
  }
  return null;
}

// Save theme to localStorage
function saveTheme(themeId: ThemeId): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch (error) {
    console.error('Failed to save theme:', error);
  }
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize with stored theme or default
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    return getStoredTheme() || 'default';
  });

  // Apply theme whenever it changes
  useEffect(() => {
    const theme = getTheme(themeId);
    applyTheme(theme);
    saveTheme(themeId);
  }, [themeId]);

  // Apply initial theme immediately (before first render)
  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      const theme = getTheme(storedTheme);
      applyTheme(theme);
    } else {
      const defaultTheme = getDefaultTheme();
      applyTheme(defaultTheme);
    }
  }, []);

  const value: ThemeContextType = {
    themeId,
    setTheme: setThemeId,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use theme context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
