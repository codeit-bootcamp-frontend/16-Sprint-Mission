import { useLocation } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import Button from "@/components/ui/Button";
import arrowLeftIcon from "@/assets/images/ic_arrow_left.svg";
import Divider from "@/components/ui/Divider/Divider";
import ProductInfo from "@/components/ProductInfo";
import ProductComments from "@/components/ProductComments/ProductComments";

const ProductDetailPage = () => {
  const location = useLocation();
  const { id: productId } = location.state;

  return (
    <PageContent>
      <ProductInfo product={location.state} />
      <Divider style={{ marginBottom: 40 }} />
      <ProductComments productId={productId} />
      <Button variant="primary" size="sm">
        목록으로 돌아가기 <img src={arrowLeftIcon} alt="왼쪽 화살표" />
      </Button>
    </PageContent>
  );
};

export default ProductDetailPage;
