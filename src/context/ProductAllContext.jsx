import { createContext, useState } from "react";

export const ProductAllContext = createContext();

function ProductAllContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [queryStrings, setQueryStrings] = useState({
    orderBy: "recent",
    page: 1,
    pageSize: 10,
  });
  const [total, setTotal] = useState(0);

  return (
    <ProductAllContext.Provider
      value={{
        total,
        setTotal,
        products,
        setProducts,
        queryStrings,
        setQueryStrings,
      }}
    >
      {children}
    </ProductAllContext.Provider>
  );
}

export default ProductAllContextProvider;
