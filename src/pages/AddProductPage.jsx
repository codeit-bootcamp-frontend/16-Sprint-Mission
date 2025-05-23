/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ADD_PRODUCT_TITLE } from "../constants/titles";
import PageContent from "../ui/Layout/PageContent";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import AddProductForm from "../components/Form/AddProductForm";

const AddProductPage = () => {
  return (
    <PageContent>
      <SectionTitle title={ADD_PRODUCT_TITLE} />
      <AddProductForm />
    </PageContent>
  );
};

export default AddProductPage;
