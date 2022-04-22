import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  const { idDrink, img, name, glass, alcoholic } = props;
  return (
    <div className="cocktail">
      <img src={img} alt="cocktail"></img>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link className="btn-primary" to={{ pathname: `/cocktail/${idDrink}` }}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
