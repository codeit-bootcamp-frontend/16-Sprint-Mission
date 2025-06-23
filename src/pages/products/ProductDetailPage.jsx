import { useLocation, useNavigate } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import Button from "@/components/ui/Button";
import arrowLeftIcon from "@/assets/images/ic_arrow_left.svg";
import Divider from "@/components/ui/Divider/Divider";
import ProductInfo from "@/components/ProductInfo";
import ProductComments from "@/components/ProductComments/ProductComments";

const ProductDetailPage = () => {
  const location = useLocation();
  const { id: productId } = location.state;
  const navigate = useNavigate();

  return (
    <PageContent>
      <ProductInfo product={location.state} />
      <Divider style={{ marginBottom: 40 }} />
      <ProductComments productId={productId} />
      <div className="page-footer">
        <Button
          variant="primary"
          size="sm"
          round={true}
          style={{ padding: "12px 40px" }}
          onClick={() => navigate("/products")}
        >
          목록으로 돌아가기 <img src={arrowLeftIcon} alt="왼쪽 화살표" />
        </Button>
      </div>
    </PageContent>
  );
};

export default ProductDetailPage;
