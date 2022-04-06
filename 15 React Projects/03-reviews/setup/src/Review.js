import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [currentPerson, setCurrentPerson] = useState(people[0]);
  const handleChangePerson = (addValue) => {
    const currentIndex = people.indexOf(currentPerson);
    let newIndex = currentIndex + addValue;
    if (newIndex < 0) newIndex = people.length - 1;
    if (newIndex > people.length - 1) newIndex = 0;
    setCurrentPerson(people[newIndex]);
  };
  const handleRandomPerson = () => {
    const currentIndex = people.indexOf(currentPerson);
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * people.length);
    }
    setCurrentPerson(people[newIndex]);
  };

  return (
    <div className="review">
      <div className="img-container">
        <img className="person-img" alt="person" src={currentPerson.image} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{currentPerson.name}</h4>
      <div className="job">{currentPerson.job}</div>
      <p className="info">{currentPerson.text}</p>
      <FaChevronLeft
        className="prev-btn"
        onClick={() => handleChangePerson(-1)}
      ></FaChevronLeft>
      <FaChevronRight
        className="next-btn"
        onClick={() => handleChangePerson(1)}
      ></FaChevronRight>
      <div>
        <button className="random-btn" onClick={handleRandomPerson}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Review;
