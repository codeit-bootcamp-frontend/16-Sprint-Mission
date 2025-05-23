import PageContent from "../../Layout/PageContent";
import ProductList from "../../components/ProductList";
import BestProductList from "../../components/ProductList/BestProductList";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  BEST_PRODUCTS_TITLE,
  ALL_PRODUCTS_TITLE,
} from "../../constants/titles";
import {
  BREAKPOINTS,
  BEST_PRODUCTS_PAGESIZE,
  ALL_PRODUCTS_PAGESIZE,
} from "../../constants/responsive";

const ProductsPage = () => {
  const { width } = useWindowDimensions();

  return (
    <PageContent>
      <BestProductList
        title={BEST_PRODUCTS_TITLE}
        pageSize={
          width >= BREAKPOINTS.desktop
            ? BEST_PRODUCTS_PAGESIZE.desktop
            : width >= BREAKPOINTS.tablet
            ? BEST_PRODUCTS_PAGESIZE.tablet
            : BEST_PRODUCTS_PAGESIZE.mobile
        }
      />
      <ProductList
        title={ALL_PRODUCTS_TITLE}
        pageSize={
          width >= BREAKPOINTS.desktop
            ? ALL_PRODUCTS_PAGESIZE.desktop
            : width >= BREAKPOINTS.tablet
            ? ALL_PRODUCTS_PAGESIZE.tablet
            : ALL_PRODUCTS_PAGESIZE.mobile
        }
      />
    </PageContent>
  );
};

export default ProductsPage;
