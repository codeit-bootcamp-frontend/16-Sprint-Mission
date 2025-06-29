import { useLocation, useNavigate } from "react-router-dom";
import PageContent from "@/components/layout/PageContent";
import Button from "@/components/ui/Button";
import arrowLeftIcon from "@/assets/images/ic_arrow_left.svg";
import Divider from "@/components/ui/Divider/Divider";
import ProductInfo from "@/components/ProductInfo";
import ProductComments from "@/components/ProductComments/ProductComments";
import { BREAKPOINTS } from "@/constants/responsive";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { PRODUCT_DETAIL_THUMB } from "@/constants/responsive";

const ProductDetailPage = () => {
  const location = useLocation();
  const { id: productId } = location.state;
  const navigate = useNavigate();

  // 반응형
  const { width } = useWindowDimensions();
  const isDesktop = width >= BREAKPOINTS.desktop - 300;
  const isTablet = width >= BREAKPOINTS.tablet + 120;

  return (
    <PageContent>
      <ProductInfo
        product={location.state}
        thumbSize={
          isDesktop
            ? PRODUCT_DETAIL_THUMB.desktop
            : isTablet
            ? PRODUCT_DETAIL_THUMB.tablet
            : "100%"
        }
      />
      <Divider style={{ marginBottom: 40 }} />
      <ProductComments productId={productId} />
      <div className="page-footer">
        <Button
          variant="bottomPrimary"
          size="xl"
          round={true}
          onClick={() => navigate("/products")}
        >
          목록으로 돌아가기 <img src={arrowLeftIcon} alt="왼쪽 화살표" />
        </Button>
      </div>
    </PageContent>
  );
};

export default ProductDetailPage;
