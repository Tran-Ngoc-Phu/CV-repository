import React from "react";

const Menu = (props) => {
  const { categories, onFilter } = props;
  const handleFilter = (filterValue) => {
    if (onFilter) {
      onFilter(filterValue);
    }
  };
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className="filter-btn"
          onClick={() => handleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Menu;
