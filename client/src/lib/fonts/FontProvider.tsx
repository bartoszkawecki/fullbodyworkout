import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getFont, applyFont, getDefaultFont } from './fonts';
import { FONT_STORAGE_KEY, type FontId } from './types';

interface FontContextType {
  fontId: FontId;
  setFont: (fontId: FontId) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

// Get stored font from localStorage
function getStoredFont(): FontId | null {
  try {
    const stored = localStorage.getItem(FONT_STORAGE_KEY);
    if (stored === 'system' || stored === 'arimo' || stored === 'roboto' || stored === 'inter' || stored === 'noto-sans') {
      return stored as FontId;
    }
  } catch (error) {
    console.error('Failed to get stored font:', error);
  }
  return null;
}

// Save font to localStorage
function saveFont(fontId: FontId): void {
  try {
    localStorage.setItem(FONT_STORAGE_KEY, fontId);
  } catch (error) {
    console.error('Failed to save font:', error);
  }
}

interface FontProviderProps {
  children: ReactNode;
}

export function FontProvider({ children }: FontProviderProps) {
  // Initialize with stored font or default
  const [fontId, setFontId] = useState<FontId>(() => {
    return getStoredFont() || 'system';
  });

  // Apply font whenever it changes
  useEffect(() => {
    const font = getFont(fontId);
    applyFont(font);
    saveFont(fontId);
  }, [fontId]);

  // Apply initial font immediately (before first render)
  useEffect(() => {
    const storedFont = getStoredFont();
    if (storedFont) {
      const font = getFont(storedFont);
      applyFont(font);
    } else {
      const defaultFont = getDefaultFont();
      applyFont(defaultFont);
    }
  }, []);

  const value: FontContextType = {
    fontId,
    setFont: setFontId,
  };

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  );
}

// Hook to use font context
export function useFont(): FontContextType {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within FontProvider');
  }
  return context;
}
