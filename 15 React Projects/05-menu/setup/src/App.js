import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const categories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [listItem, setListItem] = useState(items);
  const [categoriesList, setCategoriesList] = useState(categories);

  const handleFilter = (filterValue) => {
    if (categoriesList.includes(filterValue)) {
      if (filterValue === "all") setListItem(items);
      else {
        const newListItem = items.filter(
          (item) => item.category === filterValue
        );
        setListItem(newListItem);
      }
    }
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Menu categories={categoriesList} onFilter={handleFilter} />
      <div className="section-center">
        <Categories listItem={listItem} />
      </div>
    </section>
  );
}

export default App;
