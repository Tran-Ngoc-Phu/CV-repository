import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { listTour, onDeleteTour } = props;
  const handleDeleteTour = (idTour) => {
    if (onDeleteTour) {
      return onDeleteTour(idTour);
    }
  };
  return (
    <>
      {listTour.map((tour) => (
        <Tour key={tour.id} tour={tour} onDeleteItem={handleDeleteTour} />
      ))}
    </>
  );
};

export default Tours;
