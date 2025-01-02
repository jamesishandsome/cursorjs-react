export const cursorVariants = {
  default: {
    scale: 1,
    backgroundColor: "#ffffff",
    mixBlendMode: "difference" as const,
    transition: {
      type: "spring",
      mass: 0.6
    }
  },
  text: {
    scale: 2.5,
    backgroundColor: "#ffffff",
    mixBlendMode: "difference" as const,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 15
    }
  },
  link: {
    scale: 1.8,
    backgroundColor: "#ffd700",
    mixBlendMode: "normal" as const,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 15
    }
  },
  button: {
    scale: 2,
    backgroundColor: "#00ff00",
    mixBlendMode: "normal" as const,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 15
    }
  },
  image: {
    scale: 1.5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    mixBlendMode: "normal" as const,
    border: "2px solid white",
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 15
    }
  },
  slider: {
    scale: [1, 1.5],
    backgroundColor: "#ffffff",
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