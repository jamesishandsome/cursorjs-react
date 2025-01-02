export type CursorVariant = 'default' | 'text' | 'link' | 'button' | 'image' | 'slider';

export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorSizes {
  default: number;
  text: number;
  link: number;
  button: number;
  image: number;
  slider: number;
}

export interface CursorColors {
  default: string;
  text: string;
  link: string;
  button: string;
  image: string;
  slider: string;
}

export interface TransitionConfig {
  type: string;
  mass: number;
  damping?: number;
}

export interface CursorTransitions {
  default: TransitionConfig;
  hover: TransitionConfig;
}

export interface CursorConfig {
  size: CursorSizes;
  colors: CursorColors;
  transitions: CursorTransitions;
}