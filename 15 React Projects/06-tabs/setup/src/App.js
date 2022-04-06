import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [companyList, setCompanyList] = useState([]);
  const [activeValue, setActiveValue] = useState(null);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios(url);
        setJobList(response.data);

        const responseDataCompany = response.data.map((data) => ({
          id: data.id,
          name: data.company,
        }));
        setCompanyList(responseDataCompany);

        setActiveValue(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCourses();
  }, []);

  const handleCurrentValue = (companyId) => {
    const newActiveValue = jobList.find((job) => job.id === companyId);
    if (newActiveValue) setActiveValue(newActiveValue);
  };
  return (
    <div className="section">
      {loading === true ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            <div className="btn-container">
              {companyList.map((company, index) => {
                const classButton =
                  index === jobList.indexOf(activeValue)
                    ? "active-btn job-btn"
                    : "job-btn";
                return (
                  <button
                    key={company.id}
                    className={classButton}
                    onClick={() => handleCurrentValue(company.id)}
                  >
                    {company.name}
                  </button>
                );
              })}
            </div>
            <div className="job-info">
              <h3>{activeValue.title}</h3>
              <h4>{activeValue.company}</h4>
              <p className="job-date">{activeValue.dates}</p>
              {activeValue.duties.map((duty, index) => (
                <p className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon" />
                  {duty}
                </p>
              ))}
            </div>
          </div>
          <button className="btn">MORE INFO</button>
        </>
      )}
    </div>
  );
}

export default App;
