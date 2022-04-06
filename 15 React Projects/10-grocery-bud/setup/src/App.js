import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    grocery: yup.string().required("Please Enter Value"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [groceryList, setGroceryList] = useState([]);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [inputGrocery, setInputGrocery] = useState("");
  const [message, setMessage] = useState(undefined);

  // Handle submit the form
  const onSubmit = (data) => {
    if (indexEdit !== -1) {
      const newGroceryList = [...groceryList];
      newGroceryList[indexEdit] = data.grocery;
      setGroceryList(newGroceryList);
      setIndexEdit(-1);
      setMessage("Value Changed");
    } else {
      const newGroceryList = [...groceryList];
      newGroceryList.push(data.grocery);
      setGroceryList(newGroceryList);
      setMessage("Item Added To The List");
    }
  };

  // Handle display the message while the value is invalid
  const onError = (errors, e) => {
    setMessage(errors.grocery?.message);
  };

  // Handle delete the grocery
  const handleDelete = (deleteId) => {
    const newGroceryList = groceryList.filter(
      (grocery, index) => index !== deleteId
    );
    setGroceryList(newGroceryList);
    setMessage("Item Removed");
  };

  const handleEdit = (editIndex) => {
    setInputGrocery(groceryList[editIndex]);
    setIndexEdit(editIndex);
  };

  // Handle delete all the grocery list
  const handleClearAll = () => {
    setGroceryList([]);
    setMessage("Empty List");
  };

  // Set the value for grocery list from the local storage while init the page
  useEffect(() => {
    const groceryListStorage = JSON.parse(localStorage.getItem("groceryList"));
    if (groceryListStorage) setGroceryList(groceryListStorage);
  }, []);

  // Hide the message after a few seconds
  useEffect(() => {
    setInputGrocery("");
    const timeOut = setTimeout(() => {
      setMessage(undefined);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [message]);

  // Set the grocery list value into the local storage
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);

  return (
    <section className="main">
      <div className="section-center">
        <div className="grocery-form">
          <Alert message={message} isError={Boolean(errors.grocery?.message)} />
          <h3>Grocery Bud</h3>
          <form
            className="form-control"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <input
              className="grocery"
              {...register("grocery")}
              placeholder="e.g. eggs"
              value={inputGrocery}
              onChange={(event) => setInputGrocery(event.target.value)}
            />
            <button type="submit" className="submit-btn">
              {indexEdit !== -1 ? "Edit" : "Submit"}
            </button>
          </form>
          <List
            groceryList={groceryList}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
        {groceryList.length !== 0 && (
          <button className="clear-btn" onClick={handleClearAll}>
            Clear Items
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
