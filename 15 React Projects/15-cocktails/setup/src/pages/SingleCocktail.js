import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}${cocktailId}`);
      const data = await response.json();
      setDetails(data.drinks[0]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (!details) {
    return (
      <div className="cocktail-section">
        <h1>No Cocktail To Display</h1>
      </div>
    );
  }
  return (
    <div className="section cocktail-section">
      <Link className="btn-primary" to="/">
        back home
      </Link>
      <h2 className="section-title">{details.strDrink}</h2>
      <div className="drink">
        <img src={details.strDrinkThumb} alt="thumbnail"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {details.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {details.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {details.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {details.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {details.strInstructions}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {Object.entries(details).map((detail) => {
              if (detail[0].match(/^strIngredient.*$/)) {
                return <span>{detail[1]}</span>;
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
