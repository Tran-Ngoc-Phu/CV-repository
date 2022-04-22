import React, { useState, useContext, useEffect, useRef } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);
  const typingTimemoutRef = useRef(null); // var init with useRef will not be init again when re-render

  const searchCocktail = async (searchWords) => {
    const searchUrl = url + searchWords;
    const response = await fetch(searchUrl);
    const data = await response.json();
    setCocktailList(data.drinks);
    setLoading(false);
  };

  // Handle debounce when search
  const debounceSearch = (searchTerm) => {
    setLoading(true);
    // Clear the time out if user input new char
    if (typingTimemoutRef.current) {
      clearTimeout(typingTimemoutRef.current);
    }

    // Set timeout calling API each time user input new char
    // Calling API when user doesn't input over 1 seconds
    typingTimemoutRef.current = setTimeout(
      () => searchCocktail(searchTerm),
      1000
    );
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setCocktailList(data.drinks);
    }
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ cocktailList, debounceSearch, loading }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
