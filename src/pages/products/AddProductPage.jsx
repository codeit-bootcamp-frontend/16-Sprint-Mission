import { ADD_PRODUCT_TITLE } from "../../constants/titles";
import PageContent from "../../layout/PageContent";
import AddProductForm from "../../components/Form/AddProductForm";

const AddProductPage = () => {
  return (
    <PageContent>
      <AddProductForm title={ADD_PRODUCT_TITLE} />
    </PageContent>
  );
};

export default AddProductPage;
