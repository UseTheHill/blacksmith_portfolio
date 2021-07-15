import React from "react";
import "./ArtPieces.css";
// import { Button } from './Button';
// import { Link } from 'react-router-dom';

function ArtPieces({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
}) {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div
        className={
          lightBg ? "art__pieces-section" : "art__pieces-section darkBg"
        }
      >
        <div className="container">
          <div
            className="row art__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="art__pieces-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "art__pieces-subtitle"
                      : "art__pieces-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="art__pieces-img-wrapper">
                <img src={img} alt={alt} className="art__pieces-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtPieces;
