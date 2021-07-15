import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjThree } from "./Data";
import Pricing from "../../Pricing";

function Products() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Pricing />
    </>
  );
}

export default Products;
