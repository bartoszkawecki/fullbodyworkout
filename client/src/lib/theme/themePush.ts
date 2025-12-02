import type { AppTheme } from './types';

export const themePush: AppTheme = {
  id: 'push',
  name: 'PUSH Theme',
  description: 'Dark, bold theme inspired by PUSH Workout Tracker with neon accents',
  cssVars: {
    // Core colors - Near-black background
    background: '0 0% 5%', // #0D0D0D
    foreground: '0 0% 100%', // White text
    border: '0 0% 15%', // Subtle dark borders

    // Card colors - Dark elevated surfaces
    card: '0 0% 10%', // #1A1A1A
    cardForeground: '0 0% 100%',
    cardBorder: '0 0% 18%', // Slightly lighter border

    // Primary colors - Neon cyan/blue
    primary: '190 100% 50%', // #00C2FF - Neon cyan
    primaryForeground: '0 0% 5%', // Dark text on bright background

    // Secondary colors - Dark surface for secondary elements
    secondary: '0 0% 15%',
    secondaryForeground: '0 0% 100%',

    // Muted colors
    muted: '0 0% 12%',
    mutedForeground: '0 0% 70%', // #B3B3B3 - Light gray text

    // Accent colors - Neon magenta/pink
    accent: '320 100% 60%', // #FF3EB5 - Neon magenta
    accentForeground: '0 0% 100%',

    // Destructive colors - Bright red
    destructive: '0 85% 60%',
    destructiveForeground: '0 0% 100%',

    // Input and ring
    input: '0 0% 18%', // Dark input fields
    ring: '190 100% 50%', // Neon cyan ring/focus

    // Popover
    popover: '0 0% 8%',
    popoverForeground: '0 0% 100%',
    popoverBorder: '0 0% 20%',

    // Sidebar
    sidebar: '0 0% 8%',
    sidebarForeground: '0 0% 100%',
    sidebarBorder: '0 0% 18%',
    sidebarPrimary: '190 100% 50%',
    sidebarPrimaryForeground: '0 0% 5%',
    sidebarAccent: '0 0% 15%',
    sidebarAccentForeground: '0 0% 100%',
    sidebarRing: '190 100% 50%',

    // Chart colors - Vibrant neon colors
    chart1: '190 100% 50%', // Neon cyan
    chart2: '320 100% 60%', // Neon magenta
    chart3: '280 85% 65%', // Neon purple
    chart4: '50 100% 55%', // Neon yellow
    chart5: '160 85% 55%', // Neon green

    // Elevation - Lighter overlays for dark theme
    elevate1: 'rgba(255,255,255, .06)',
    elevate2: 'rgba(255,255,255, .12)',
    buttonOutline: 'rgba(255,255,255, .15)',
    badgeOutline: 'rgba(255,255,255, .08)',

    // Border intensity
    opaqueButtonBorderIntensity: '12',

    // Shadows - Stronger, with neon glow hints
    shadow2xs: '0px 1px 1px 0px hsl(0 0% 0% / 0.30)',
    shadowXs: '0px 1px 2px 0px hsl(0 0% 0% / 0.40)',
    shadowSm: '0px 2px 4px -1px hsl(0 0% 0% / 0.50), 0px 1px 2px -1px hsl(0 0% 0% / 0.30)',
    shadow: '0px 4px 6px -1px hsl(0 0% 0% / 0.60), 0px 2px 4px -2px hsl(0 0% 0% / 0.40)',
    shadowMd: '0px 6px 8px -1px hsl(0 0% 0% / 0.70), 0px 4px 6px -2px hsl(0 0% 0% / 0.50)',
    shadowLg: '0px 10px 15px -3px hsl(0 0% 0% / 0.80), 0px 4px 6px -4px hsl(0 0% 0% / 0.60), 0px 0px 20px -5px hsl(190 100% 50% / 0.15)',
    shadowXl: '0px 20px 25px -5px hsl(0 0% 0% / 0.85), 0px 8px 10px -6px hsl(0 0% 0% / 0.70), 0px 0px 30px -5px hsl(190 100% 50% / 0.20)',
    shadow2xl: '0px 25px 50px -12px hsl(0 0% 0% / 0.90), 0px 0px 40px -10px hsl(190 100% 50% / 0.25)',

    // Typography - Bold, modern fonts
    fontSans: '"Inter", "Poppins", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSerif: 'Georgia, serif',
    fontMono: '"Fira Code", "JetBrains Mono", Menlo, monospace',

    // Radius - More rounded for modern feel
    radius: '.75rem', // 12px - more rounded than default
  },
};
