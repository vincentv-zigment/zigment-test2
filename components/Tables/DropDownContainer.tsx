import React, { createContext, useContext, ReactNode, useState } from 'react';

type DropDownContextType = {
  openDropDown: boolean;
  setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  dropDownPosition: { x: number; y: number };
  setDropDownPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  childNode: ReactNode;
  setChildNode: React.Dispatch<React.SetStateAction<ReactNode>>;
};

const DropDownContext = createContext<DropDownContextType | undefined>(undefined);

export const useDropDownContext = () => {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error('useDropDownContext must be used within a DropDownProvider');
  }
  return context;
};

export const DropDownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ x: 0, y: 0 });
  const [childNode, setChildNode] = useState<ReactNode>(null);

  

  const contextValue: DropDownContextType = {
    openDropDown,
    setOpenDropDown,
    dropDownPosition,
    setDropDownPosition,
    childNode,
    setChildNode,
  };

  return (
    // <div className='relative'>
      <DropDownContext.Provider value={contextValue}>{children}</DropDownContext.Provider>
    // </div>
    );
};
