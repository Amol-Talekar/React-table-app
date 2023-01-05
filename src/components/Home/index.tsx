import React from "react";
import { TableComponent } from "../TableComponent";
import { HomeContainer, OrangeBox, TableFloatContainer } from "./style";

export const Home = () => {
  return (
    <HomeContainer>
      <OrangeBox />
      <TableFloatContainer>
        <TableComponent />
      </TableFloatContainer>
    </HomeContainer>
  );
};
