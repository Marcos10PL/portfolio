import React, { createContext, useContext, useState } from "react";
import { linksIds } from "../data";

type ScrollButtonsContextType = {
  index: number;
  increment: () => void;
  reset: () => void;
};

export const ScrollButtonsContext = createContext<ScrollButtonsContextType>({
  index: 0,
  increment: () => {},
  reset: () => {},
});

type ScrollButtonsProviderProps = {
  children: React.ReactNode;
};

export const ScrollButtonsProvider = ({
  children,
}: ScrollButtonsProviderProps) => {
  const [index, setIndex] = useState(1);

  const increment = () => {
    setIndex(prevIndex => (prevIndex + 1) % linksIds.length);
  };

  const reset = () => {
    setIndex(1);
  };

  return (
    <ScrollButtonsContext.Provider value={{ index, increment, reset }}>
      {children}
    </ScrollButtonsContext.Provider>
  );
};

export const useIndex = () => useContext(ScrollButtonsContext);
