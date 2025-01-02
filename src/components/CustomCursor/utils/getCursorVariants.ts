import { CursorConfig } from '../types';

export function getCursorVariants(config: CursorConfig) {
  return {
    default: {
      scale: 1,
      backgroundColor: config.colors.default,
      mixBlendMode: "difference" as const,
      transition: config.transitions.default
    },
    text: {
      scale: 2.5,
      backgroundColor: config.colors.text,
      mixBlendMode: "difference" as const,
      transition: config.transitions.hover
    },
    link: {
      scale: 1.8,
      backgroundColor: config.colors.link,
      mixBlendMode: "normal" as const,
      transition: config.transitions.hover
    },
    button: {
      scale: 2,
      backgroundColor: config.colors.button,
      mixBlendMode: "normal" as const,
      transition: config.transitions.hover
    },
    image: {
      scale: 1.5,
      backgroundColor: config.colors.image,
      mixBlendMode: "normal" as const,
      border: "2px solid white",
      transition: config.transitions.hover
    },
    slider: {
      scale: [1, 1.5],
      backgroundColor: config.colors.slider,
      mixBlendMode: "difference" as const,
      transition: {
        scale: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8
        }
      }
    }
  };
}