'use client'
import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface product {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

 const ProductContext = createContext<product | null>(null);

export default function ProductContextProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProductContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = (): product => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };