import { CursorConfig } from '../types';

export const defaultCursorConfig: CursorConfig = {
  size: {
    default: 12,
    text: 30,
    link: 22,
    button: 24,
    image: 18,
    slider: 12
  },
  colors: {
    default: "#ffffff",
    link: "#ffd700",
    button: "#00ff00",
    image: "rgba(255, 255, 255, 0.5)",
    text: "#ffffff",
    slider: "#ffffff"
  },
  transitions: {
    default: {
      type: "spring",
      mass: 0.6
    },
    hover: {
      type: "spring",
      mass: 0.6,
      damping: 15
    }
  }
};