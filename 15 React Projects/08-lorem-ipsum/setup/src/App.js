import React, { useState } from "react";
import { useForm } from "react-hook-form";
import data from "./data";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
  mixed: {
    default: "You must specify a number",
  },
  number: {
    typeError: "You must specify a number",
    positive: "Please input the positive number",
    integer: "Please input the integer number",
  },
});

const schema = yup
  .object()
  .shape({
    paragraphIndex: yup
      .number()
      .typeError("You must specify a number")
      .positive("Please input the positive number")
      .integer("Please input the integer number"),
  })
  .required();

function App() {
  const [resultList, setResultList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (submitData) => {
    setResultList([]);
    const newResultList = data.filter(
      (result, index) => index < submitData.paragraphIndex
    );
    setErrorMessage(false);
    setResultList(newResultList);
  };

  const onError = (errors) => {
    console.log(errors);
    setErrorMessage(true);
    setResultList([]);
  };

  return (
    <section className="section main">
      <div className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form
          className="lorem-form-container"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="lorem-form">
            <label>Paragraphs:</label>
            <input
              type="number"
              step="any"
              {...register("paragraphIndex", { required: true })}
            />
            <button type="submit" className="btn">
              GENERATE
            </button>
          </div>
          <div className="form-error">
            {errorMessage && errors.paragraphIndex?.message}
          </div>
        </form>
        {resultList.map((result, index) => (
          <p className="result" key={index}>
            {result}
          </p>
        ))}
      </div>
    </section>
  );
}

export default App;
