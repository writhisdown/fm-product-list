import {createContext, useState} from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <ProductContext.Provider value={{activeProduct, setActiveProduct}}>
      {children}
    </ProductContext.Provider>
  );
};
