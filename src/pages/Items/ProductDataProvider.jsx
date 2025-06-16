import { createContext, useState } from 'react';

export const ProductData = createContext();

function ProductDataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [queryStrings, setQueryStrings] = useState({
    orderBy: 'recent',
    page: 1,
    pageSize: 10,
  });
  const [total, setTotal] = useState(0);

  return (
    <ProductData.Provider
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
    </ProductData.Provider>
  );
}

export default ProductDataProvider;
