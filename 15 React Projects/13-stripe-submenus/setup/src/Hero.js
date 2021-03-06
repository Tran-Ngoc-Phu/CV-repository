import React, { useContext } from "react";
import phoneImg from "./images/phone.svg";
import { StoreContext } from "./context";

const Hero = () => {
  const { setSubLink } = useContext(StoreContext);
  const handleHideSubmenu = () => {
    setSubLink(null);
  };
  return (
    <div className="hero" onMouseOver={handleHideSubmenu}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </div>
        <div className="hero-images">
          <img className="phone-img" src={phoneImg} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
