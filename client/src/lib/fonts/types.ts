// Font type definitions
export interface AppFont {
  id: 'system' | 'arimo' | 'roboto' | 'inter' | 'noto-sans';
  name: string;
  description: string;
  fontFamily: string;
  category: 'sans-serif' | 'serif' | 'monospace';
}

export const FONT_STORAGE_KEY = 'app_font';

export type FontId = AppFont['id'];
