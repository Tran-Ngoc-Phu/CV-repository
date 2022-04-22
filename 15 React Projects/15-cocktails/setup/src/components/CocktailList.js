import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktailList, loading } = useGlobalContext();
  if (!cocktailList) {
    return (
      <h2 className="section-title">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  } else if (loading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktailList.map((cocktail) => {
          console.log(cocktail);
          return (
            <Cocktail
              key={cocktail.idDrink}
              img={cocktail.strDrinkThumb}
              name={cocktail.strDrink}
              glass={cocktail.strGlass}
              alcoholic={cocktail.strAlcoholic}
              idDrink={cocktail.idDrink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;
