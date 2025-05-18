import { createContext, useContext, useState } from "react";

const ProductAllContext = createContext();

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

export function useToTal() {
  const context = useContext(ProductAllContextProvider);
  return context.total;
}

export function useSetToTal() {
  const context = useContext(ProductAllContextProvider);
  return context.setTotal;
}

export function useQueryStrings() {
  const context = useContext(ProductAllContextProvider);
  return context.queryStrings;
}

export function useProducts() {
  const context = useContext(ProductAllContextProvider);
  return context.products;
}

export function useSetQueryStrings() {
  const context = useContext(ProductAllContextProvider);
  return context.setQueryStrings;
}
export function useSetProducts() {
  const context = useContext(ProductAllContextProvider);
  return context.setProducts;
}

export default ProductAllContextProvider;
