  import React, { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/api";

export  const ProductsContext = createContext();
const ProductConttextProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
      console.log("connected")
    };

    fetchAPI();
  }, []);
  return <ProductsContext.Provider value={products}>
{children}    
</ProductsContext.Provider>;
};


export default ProductConttextProvider;
