import { motion } from 'framer-motion';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useCursorConfig } from './context/CursorConfigContext';
import { getCursorVariants } from './utils/getCursorVariants';
import './CustomCursor.css';

export function CustomCursor() {
  const { cursorPos, cursorVariant } = useCustomCursor();
  const { config } = useCursorConfig();
  const cursorVariants = getCursorVariants(config);

  return (
    <motion.div
      className="custom-cursor"
      variants={cursorVariants}
      animate={cursorVariant}
      style={{
        top: cursorPos.y - (config.size[cursorVariant] / 2),
        left: cursorPos.x - (config.size[cursorVariant] / 2),
        width: config.size[cursorVariant],
        height: config.size[cursorVariant],
      }}
    />
  );
}