import type { AppFont, FontId } from './types';

// Font definitions
export const fontSystem: AppFont = {
  id: 'system',
  name: 'System Default',
  description: 'Clean system fonts for optimal performance',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  category: 'sans-serif',
};

export const fontArimo: AppFont = {
  id: 'arimo',
  name: 'Arimo',
  description: 'Modern, clean sans-serif with excellent readability',
  fontFamily: '"Arimo", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  category: 'sans-serif',
};

export const fontRoboto: AppFont = {
  id: 'roboto',
  name: 'Roboto',
  description: 'Google\'s signature font with geometric friendliness',
  fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  category: 'sans-serif',
};

export const fontInter: AppFont = {
  id: 'inter',
  name: 'Inter',
  description: 'Designed for screens with excellent legibility',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  category: 'sans-serif',
};

export const fontNotoSans: AppFont = {
  id: 'noto-sans',
  name: 'Noto Sans',
  description: 'Google\'s universal font supporting multiple languages',
  fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  category: 'sans-serif',
};

// Font registry
export const fonts: Record<FontId, AppFont> = {
  system: fontSystem,
  arimo: fontArimo,
  roboto: fontRoboto,
  inter: fontInter,
  'noto-sans': fontNotoSans,
};

// Get all fonts as array
export const allFonts = Object.values(fonts);

// Get font by ID
export function getFont(id: FontId): AppFont {
  return fonts[id];
}

// Get default font
export function getDefaultFont(): AppFont {
  return fontSystem;
}

// Apply font to document
export function applyFont(font: AppFont): void {
  const root = document.documentElement;

  // Set data-font attribute for any font-specific CSS
  root.setAttribute('data-font', font.id);

  // Apply font-family to root
  root.style.setProperty('--font-sans', font.fontFamily);
}
