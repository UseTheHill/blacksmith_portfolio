import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "./Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "64" }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__header">Pricing</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>$8.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>100 Transactions</li>
                    <li>100 Transactions</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>$80.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>200 Transactions</li>
                    <li>200 Transactions</li>
                    <li>200 Transactions</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>$800.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>500 Transactions</li>
                    <li>500 Transactions</li>
                    <li>500 Transactions</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
