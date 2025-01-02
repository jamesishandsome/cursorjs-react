import { CursorConfig } from '../types';

export const simpleReplace: CursorConfig = {
  size: {
    default: 16,
    text: 20,
    link: 20,
    button: 20,
    image: 20,
    slider: 16
  },
  colors: {
    default: "#000000",
    text: "#000000",
    link: "#0000ff",
    button: "#00ff00",
    image: "#ff0000",
    slider: "#000000"
  },
  transitions: {
    default: {
      type: "tween",
      mass: 0.3
    },
    hover: {
      type: "tween",
      mass: 0.3
    }
  }
};

export const simpleFollow: CursorConfig = {
  size: {
    default: 8,
    text: 8,
    link: 8,
    button: 8,
    image: 8,
    slider: 8
  },
  colors: {
    default: "#000000",
    text: "#000000",
    link: "#000000",
    button: "#000000",
    image: "#000000",
    slider: "#000000"
  },
  transitions: {
    default: {
      type: "spring",
      mass: 0.1,
      damping: 10
    },
    hover: {
      type: "spring",
      mass: 0.1,
      damping: 10
    }
  }
};

export const blendedCursor: CursorConfig = {
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
    text: "#ffffff",
    link: "#ffd700",
    button: "#00ff00",
    image: "rgba(255, 255, 255, 0.5)",
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