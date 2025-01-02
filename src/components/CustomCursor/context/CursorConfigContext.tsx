import React, { createContext, useContext, useState } from 'react';
import { CursorConfig } from '../types';
import { blendedCursor } from '../presets/cursorPresets';

interface CursorConfigContextType {
  config: CursorConfig;
  updateConfig: (newConfig: Partial<CursorConfig>) => void;
}

const CursorConfigContext = createContext<CursorConfigContextType | undefined>(undefined);

export function CursorConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<CursorConfig>(blendedCursor);

  const updateConfig = (newConfig: Partial<CursorConfig>) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      ...newConfig
    }));
  };

  return (
    <CursorConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </CursorConfigContext.Provider>
  );
}

export function useCursorConfig() {
  const context = useContext(CursorConfigContext);
  if (!context) {
    throw new Error('useCursorConfig must be used within a CursorConfigProvider');
  }
  return context;
}