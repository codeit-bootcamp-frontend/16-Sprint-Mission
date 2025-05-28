import { useState } from "react";
import BestProductsList from "./BestProductsList";
import AllProductsList from "./AllProductsList";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

function Main() {
  return (
    <ListContainer>
      <BestProductsList />
      <AllProductsList />
    </ListContainer>
  );
}

export default Main;
