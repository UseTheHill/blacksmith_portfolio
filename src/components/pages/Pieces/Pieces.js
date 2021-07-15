import React from "react";
import ArtPieces from "../../ArtPieces";
import { artObjOne, artObjTwo, artObjThree, artObjFour, artObjFive, artObjSix } from "./Data";

function Pieces() {
  return (
    <>
      <ArtPieces {...artObjOne} />
      <ArtPieces {...artObjTwo} />
      <ArtPieces {...artObjThree} />
      <ArtPieces {...artObjFour} />
      <ArtPieces {...artObjFive} />
      <ArtPieces {...artObjSix} />
    </>
  );
}

export default Pieces;
