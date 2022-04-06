import React from "react";

const List = (props) => {
  const { listData } = props;
  console.log(listData);
  return (
    <>
      {listData.map((element) => (
        <div className="person" key={element.id}>
          <img alt={`${element.name}`} src={element.image} />
          <div>
            <h4>{element.name}</h4>
            <p>{element.age} years</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
