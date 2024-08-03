"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface TransitionContextProps {
  isAnimating: boolean;
  setAnimating: (animating: boolean) => void;
}

const TransitionContext = createContext<TransitionContextProps>({
  isAnimating: false,
  setAnimating: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <TransitionContext.Provider value={{ isAnimating, setAnimating: setIsAnimating }}>
      {children}
    </TransitionContext.Provider>
  );
};
