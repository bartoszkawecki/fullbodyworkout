import type { AppTheme } from './types';

export const themeDefault: AppTheme = {
  id: 'default',
  name: 'Default Theme',
  description: 'Clean, light theme with subtle accents',
  cssVars: {
    // Core colors - Light, clean background
    background: '0 0% 100%',
    foreground: '0 0% 10%',
    border: '0 0% 90%',

    // Card colors - Subtle off-white
    card: '0 0% 98%',
    cardForeground: '0 0% 10%',
    cardBorder: '0 0% 92%',

    // Primary colors - Red/pink accent (current app color)
    primary: '352 75% 45%',
    primaryForeground: '0 0% 100%',

    // Secondary colors
    secondary: '0 0% 94%',
    secondaryForeground: '0 0% 10%',

    // Muted colors
    muted: '0 0% 96%',
    mutedForeground: '0 0% 40%',

    // Accent colors
    accent: '0 0% 94%',
    accentForeground: '0 0% 10%',

    // Destructive colors
    destructive: '0 72% 51%',
    destructiveForeground: '0 0% 100%',

    // Input and ring
    input: '0 0% 85%',
    ring: '352 75% 45%',

    // Popover
    popover: '0 0% 98%',
    popoverForeground: '0 0% 10%',
    popoverBorder: '0 0% 88%',

    // Sidebar
    sidebar: '0 0% 96%',
    sidebarForeground: '0 0% 10%',
    sidebarBorder: '0 0% 88%',
    sidebarPrimary: '352 75% 45%',
    sidebarPrimaryForeground: '0 0% 100%',
    sidebarAccent: '0 0% 94%',
    sidebarAccentForeground: '0 0% 10%',
    sidebarRing: '352 75% 45%',

    // Chart colors
    chart1: '352 75% 45%',
    chart2: '262 83% 58%',
    chart3: '197 92% 42%',
    chart4: '43 96% 56%',
    chart5: '27 87% 57%',

    // Elevation
    elevate1: 'rgba(0,0,0, .03)',
    elevate2: 'rgba(0,0,0, .08)',
    buttonOutline: 'rgba(0,0,0, .10)',
    badgeOutline: 'rgba(0,0,0, .05)',

    // Border intensity
    opaqueButtonBorderIntensity: '-8',

    // Shadows - Light, subtle
    shadow2xs: '0px 1px 1px 0px hsl(0 0% 0% / 0.02)',
    shadowXs: '0px 1px 2px 0px hsl(0 0% 0% / 0.04)',
    shadowSm: '0px 2px 4px -1px hsl(0 0% 0% / 0.06), 0px 1px 2px -1px hsl(0 0% 0% / 0.04)',
    shadow: '0px 4px 6px -1px hsl(0 0% 0% / 0.08), 0px 2px 4px -2px hsl(0 0% 0% / 0.06)',
    shadowMd: '0px 6px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.08)',
    shadowLg: '0px 10px 15px -3px hsl(0 0% 0% / 0.12), 0px 4px 6px -4px hsl(0 0% 0% / 0.08)',
    shadowXl: '0px 20px 25px -5px hsl(0 0% 0% / 0.14), 0px 8px 10px -6px hsl(0 0% 0% / 0.10)',
    shadow2xl: '0px 25px 50px -12px hsl(0 0% 0% / 0.16)',

    // Typography - System fonts
    fontSans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontSerif: 'Georgia, serif',
    fontMono: 'Menlo, monospace',

    // Radius
    radius: '.5rem',
  },
};
