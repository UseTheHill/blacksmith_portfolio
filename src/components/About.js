import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaFire, FaSchool, FaGraduationCap } from "react-icons/fa";
// import { Button } from "./Button";

import { IconContext } from "react-icons/lib";

function About() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "64" }}>
      <div>
        <div className="about__section">
          <div className="about__wrapper">
            <h1 className="about__header">About</h1>
            <div className="about__container">
              <Link to="/sign-up" className="about__container-card">
                <div className="about__container-cardInfo">
                  <div className="icon">
                    <FaGraduationCap />
                  </div>

                  <h3>CCS Graduate</h3>
                  <h4>2009</h4>
                  <p>Detroit, MI</p>
                  <ul className="about__container-features">
                    <li>Fine Arts</li>
                    <li>Blacksmithing</li>
                    <li>Metalsmithing</li>
                  </ul>
                  {/* <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button> */}
                </div>
              </Link>
              <Link to="/sign-up" className="about__container-card">
                <div className="about__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Blacksmith Shop</h3>
                  <h4></h4>
                  <p>Lake Orion, MI</p>
                  <ul className="about__container-features">
                    <li>Gas Forge</li>
                    <li>Coal Forge</li>
                    <li>Power Hammer</li>
                  </ul>
                  {/* <Button buttonSize="btn--wide" buttonColor="green">
                    Choose Plan
                  </Button> */}
                </div>
              </Link>
              <Link to="/sign-up" className="about__container-card">
                <div className="about__container-cardInfo">
                  <div className="icon">
                    <FaSchool />
                  </div>
                  <h3>Teaching</h3>
                  <h4></h4>
                  <p>Rates Available Upon Request</p>
                  <ul className="about__container-features">
                    <li>Blacksmithing 101</li>
                    <li>Knife Making</li>
                    <li>Metalsmithing</li>
                  </ul>
                  {/* <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default About;
