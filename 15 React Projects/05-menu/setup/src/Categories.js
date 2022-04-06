import React from "react";

const Categories = (props) => {
  const { listItem } = props;
  return (
    <>
      {listItem.map((item) => (
        <div className="menu-item">
          <img className="photo" alt="food" src={item.img} />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">${item.price}</h4>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;
