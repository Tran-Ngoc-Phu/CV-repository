import React, { useState } from "react";

const Tour = (props) => {
  const { tour, onDeleteItem } = props;

  const handleDeleteItem = (idTour) => {
    if (onDeleteItem) {
      return onDeleteItem(idTour);
    }
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 200) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "... Read More" : " Show Less"}
        </span>
      </p>
    );
  };

  return (
    <div className="single-tour">
      <img src={tour.image} alt={`tour ${tour.id}`} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <p className="tour-price">${tour.price}</p>
        </div>
        <ReadMore>{tour.info}</ReadMore>
        <button
          className="delete-btn"
          onClick={() => {
            handleDeleteItem(tour.id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
