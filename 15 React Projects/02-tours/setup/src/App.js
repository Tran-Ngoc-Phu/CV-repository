import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [listTour, setTourList] = useState([]);
  const [loadingComponent, setLoadingComponent] = useState(false);

  const getTours = async () => {
    setLoadingComponent(true);
    try {
      const response = await axios.get(url);
      const responseData = response.data;
      if (responseData) setLoadingComponent(false);

      setTourList(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  const handleDeleteTour = (idTour) => {
    if (idTour) {
      const newListTour = listTour.filter((tour) => tour.id !== idTour);
      setTourList(newListTour);
    }
  };

  const handleRefresh = () => {
    getTours();
  };
  return (
    <main>
      {loadingComponent === true ? (
        <Loading />
      ) : (
        <div className="title">
          <h2>{listTour.length === 0 ? "No Tours Left" : "Our Tours"}</h2>
          <div className="underline"></div>
          {listTour.length === 0 && (
            <button className="btn" onClick={handleRefresh}>
              Refesh
            </button>
          )}

          <Tours listTour={listTour} onDeleteTour={handleDeleteTour} />
        </div>
      )}
    </main>
  );
}

export default App;
