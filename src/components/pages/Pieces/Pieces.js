import React from "react";
import ArtPieces from "../../ArtPieces";
import { artObjOne, artObjTwo, artObjThree, artObjFour } from "./Data";

function Pieces() {
  return (
    <>
      <ArtPieces {...artObjOne} />
      <ArtPieces {...artObjTwo} />
      <ArtPieces {...artObjThree} />
      <ArtPieces {...artObjFour} />
    </>
  );
}

export default Pieces;
