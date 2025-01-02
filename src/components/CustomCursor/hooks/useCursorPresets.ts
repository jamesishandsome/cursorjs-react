import { useCursorConfig } from '../context/CursorConfigContext';
import { simpleReplace, simpleFollow, blendedCursor } from '../presets/cursorPresets';

export type PresetMode = 'simpleReplace' | 'simpleFollow' | 'blended';

export function useCursorPresets() {
  const { updateConfig } = useCursorConfig();

  const setPreset = (preset: PresetMode) => {
    switch (preset) {
      case 'simpleReplace':
        updateConfig(simpleReplace);
        break;
      case 'simpleFollow':
        updateConfig(simpleFollow);
        break;
      case 'blended':
        updateConfig(blendedCursor);
        break;
    }
  };

  return { setPreset };
}