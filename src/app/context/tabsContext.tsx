"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TabContextProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabContext = createContext<TabContextProps>({
  activeTab: 1,
  setActiveTab: () => {},
});

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider = ({ children }: TabProviderProps) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);