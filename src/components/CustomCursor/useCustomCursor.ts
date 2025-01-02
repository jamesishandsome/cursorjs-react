import { useState, useEffect } from 'react';
import { CursorPosition, CursorVariant } from './types';
import { cursorElements } from './cursorElements';

export function useCustomCursor() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleElementEnter = (variant: CursorVariant) => () => setCursorVariant(variant);
    const handleElementLeave = () => setCursorVariant('default');

    // Set up event listeners for cursor movement
    window.addEventListener('mousemove', moveCursor);

    // Set up event listeners for different element types
    Object.entries(cursorElements).forEach(([variant, selector]) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener('mouseenter', handleElementEnter(variant as CursorVariant));
        element.addEventListener('mouseleave', handleElementLeave);
      });
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      Object.entries(cursorElements).forEach(([_, selector]) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.removeEventListener('mouseenter', handleElementEnter);
          element.removeEventListener('mouseleave', handleElementLeave);
        });
      });
    };
  }, []);

  return { cursorPos, cursorVariant };
}