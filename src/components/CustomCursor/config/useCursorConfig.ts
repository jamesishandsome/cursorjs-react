import { useState } from 'react';
import { CursorConfig } from '../types';
import { defaultCursorConfig } from './cursorConfig';

export function useCursorConfig() {
  const [config, setConfig] = useState<CursorConfig>(defaultCursorConfig);

  const updateConfig = (newConfig: Partial<CursorConfig>) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      ...newConfig
    }));
  };

  return { config, updateConfig };
}