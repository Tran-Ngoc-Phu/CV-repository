import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [employeeData, setEmployeeData] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const hanldeChangeSlide = (value) => {
    const newActiveIndex =
      activeIndex + value > employeeData.length - 1 ? 0 : activeIndex + value;
    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      hanldeChangeSlide(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {employeeData.map((employee, index) => {
          let slideClass = "nextSlide";
          if (index === activeIndex) {
            slideClass = "activeSlide";
          } else if (
            index === activeIndex - 1 ||
            (activeIndex === 0 && index === employeeData.length - 1)
          ) {
            console.log("lastIndex:", index);
            slideClass = "lastSlide";
          } else {
            slideClass = "nextSlide";
          }
          return (
            <article className={slideClass} key={employee.id}>
              <img className="person-img" alt="person" src={employee.image} />
              <h4>{employee.name}</h4>
              <h3 className="title">{employee.title}</h3>
              <p className="text">{employee.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <FiChevronRight className="next" onClick={() => hanldeChangeSlide(1)} />
        <FiChevronLeft className="prev" onClick={() => hanldeChangeSlide(-1)} />
      </div>
    </section>
  );
}

export default App;
