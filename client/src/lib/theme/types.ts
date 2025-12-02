// Theme type definitions
export interface AppTheme {
  id: 'default' | 'push';
  name: string;
  description: string;
  cssVars: {
    // Core colors
    background: string;
    foreground: string;
    border: string;

    // Card colors
    card: string;
    cardForeground: string;
    cardBorder: string;

    // Primary colors
    primary: string;
    primaryForeground: string;

    // Secondary colors
    secondary: string;
    secondaryForeground: string;

    // Muted colors
    muted: string;
    mutedForeground: string;

    // Accent colors
    accent: string;
    accentForeground: string;

    // Destructive colors
    destructive: string;
    destructiveForeground: string;

    // Input and ring
    input: string;
    ring: string;

    // Popover
    popover: string;
    popoverForeground: string;
    popoverBorder: string;

    // Sidebar
    sidebar: string;
    sidebarForeground: string;
    sidebarBorder: string;
    sidebarPrimary: string;
    sidebarPrimaryForeground: string;
    sidebarAccent: string;
    sidebarAccentForeground: string;
    sidebarRing: string;

    // Chart colors
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;

    // Elevation
    elevate1: string;
    elevate2: string;
    buttonOutline: string;
    badgeOutline: string;

    // Border intensity
    opaqueButtonBorderIntensity: string;

    // Shadows
    shadow2xs: string;
    shadowXs: string;
    shadowSm: string;
    shadow: string;
    shadowMd: string;
    shadowLg: string;
    shadowXl: string;
    shadow2xl: string;

    // Typography
    fontSans: string;
    fontSerif: string;
    fontMono: string;

    // Radius
    radius: string;
  };
}

export const THEME_STORAGE_KEY = 'app_theme';

export type ThemeId = AppTheme['id'];
