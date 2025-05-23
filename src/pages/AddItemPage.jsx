/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PageContent from "../ui/Layout/PageContent";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import { ADD_ITEM_TITLE } from "../constants/titles";

const AddItemPage = () => {
  return (
    <PageContent>
      <SectionTitle title={ADD_ITEM_TITLE} />
    </PageContent>
  );
};

export default AddItemPage;
