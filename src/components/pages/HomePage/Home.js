import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjTwo } from "./Data";
// import About from "../../About"

function Home() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      {/* <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} /> */}
      {/* <About /> */}
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
