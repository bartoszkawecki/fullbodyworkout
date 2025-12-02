import { themeDefault } from './themeDefault';
import { themePush } from './themePush';
import type { AppTheme, ThemeId } from './types';

// Theme registry
export const themes: Record<ThemeId, AppTheme> = {
  default: themeDefault,
  push: themePush,
};

// Get all themes as array
export const allThemes = Object.values(themes);

// Get theme by ID
export function getTheme(id: ThemeId): AppTheme {
  return themes[id];
}

// Get default theme
export function getDefaultTheme(): AppTheme {
  return themeDefault;
}

// Apply theme to document
export function applyTheme(theme: AppTheme): void {
  const root = document.documentElement;

  // Set data-theme attribute for any theme-specific CSS
  root.setAttribute('data-theme', theme.id);

  // Apply all CSS variables
  const vars = theme.cssVars;

  // Core colors
  root.style.setProperty('--background', vars.background);
  root.style.setProperty('--foreground', vars.foreground);
  root.style.setProperty('--border', vars.border);

  // Card
  root.style.setProperty('--card', vars.card);
  root.style.setProperty('--card-foreground', vars.cardForeground);
  root.style.setProperty('--card-border', vars.cardBorder);

  // Primary
  root.style.setProperty('--primary', vars.primary);
  root.style.setProperty('--primary-foreground', vars.primaryForeground);

  // Secondary
  root.style.setProperty('--secondary', vars.secondary);
  root.style.setProperty('--secondary-foreground', vars.secondaryForeground);

  // Muted
  root.style.setProperty('--muted', vars.muted);
  root.style.setProperty('--muted-foreground', vars.mutedForeground);

  // Accent
  root.style.setProperty('--accent', vars.accent);
  root.style.setProperty('--accent-foreground', vars.accentForeground);

  // Destructive
  root.style.setProperty('--destructive', vars.destructive);
  root.style.setProperty('--destructive-foreground', vars.destructiveForeground);

  // Input and ring
  root.style.setProperty('--input', vars.input);
  root.style.setProperty('--ring', vars.ring);

  // Popover
  root.style.setProperty('--popover', vars.popover);
  root.style.setProperty('--popover-foreground', vars.popoverForeground);
  root.style.setProperty('--popover-border', vars.popoverBorder);

  // Sidebar
  root.style.setProperty('--sidebar', vars.sidebar);
  root.style.setProperty('--sidebar-foreground', vars.sidebarForeground);
  root.style.setProperty('--sidebar-border', vars.sidebarBorder);
  root.style.setProperty('--sidebar-primary', vars.sidebarPrimary);
  root.style.setProperty('--sidebar-primary-foreground', vars.sidebarPrimaryForeground);
  root.style.setProperty('--sidebar-accent', vars.sidebarAccent);
  root.style.setProperty('--sidebar-accent-foreground', vars.sidebarAccentForeground);
  root.style.setProperty('--sidebar-ring', vars.sidebarRing);

  // Charts
  root.style.setProperty('--chart-1', vars.chart1);
  root.style.setProperty('--chart-2', vars.chart2);
  root.style.setProperty('--chart-3', vars.chart3);
  root.style.setProperty('--chart-4', vars.chart4);
  root.style.setProperty('--chart-5', vars.chart5);

  // Elevation
  root.style.setProperty('--elevate-1', vars.elevate1);
  root.style.setProperty('--elevate-2', vars.elevate2);
  root.style.setProperty('--button-outline', vars.buttonOutline);
  root.style.setProperty('--badge-outline', vars.badgeOutline);

  // Border intensity
  root.style.setProperty('--opaque-button-border-intensity', vars.opaqueButtonBorderIntensity);

  // Shadows
  root.style.setProperty('--shadow-2xs', vars.shadow2xs);
  root.style.setProperty('--shadow-xs', vars.shadowXs);
  root.style.setProperty('--shadow-sm', vars.shadowSm);
  root.style.setProperty('--shadow', vars.shadow);
  root.style.setProperty('--shadow-md', vars.shadowMd);
  root.style.setProperty('--shadow-lg', vars.shadowLg);
  root.style.setProperty('--shadow-xl', vars.shadowXl);
  root.style.setProperty('--shadow-2xl', vars.shadow2xl);

  // Typography
  root.style.setProperty('--font-sans', vars.fontSans);
  root.style.setProperty('--font-serif', vars.fontSerif);
  root.style.setProperty('--font-mono', vars.fontMono);

  // Radius
  root.style.setProperty('--radius', vars.radius);
}
