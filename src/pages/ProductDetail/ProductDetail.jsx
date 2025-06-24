import { useParams } from 'react-router-dom';
import ProductAsk from './ProductAsk';
import styles from './styles/ProductDetail.module.css';
import ProductInfo from './ProductInfo';
import BackLink from '@components/BackLink';

function ProductDetail() {
  const { id } = useParams();

  return (
    <main className={`container ${styles.main}`}>
      <ProductInfo productId={id} />
      <ProductAsk productId={id} />
      <BackLink />
    </main>
  );
}

export default ProductDetail;
