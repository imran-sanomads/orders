import React from "react";
import { Page } from "@shopify/polaris";
import ProductContent from "../components/homePage";

const HomePage = () => {
  return (
    <Page narrowWidth>
      <ProductContent />
    </Page>
  );
};

export default HomePage;
