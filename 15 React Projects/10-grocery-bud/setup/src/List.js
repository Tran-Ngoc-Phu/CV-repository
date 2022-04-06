import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const List = (props) => {
  const { groceryList, onDelete, onEdit } = props;
  const handleDelete = (index) => {
    if (onDelete) onDelete(index);
  };
  const handleEdit = (index) => {
    if (onEdit) onEdit(index);
  };
  return (
    <div className="grocery-container">
      {groceryList.map((grocery, index) => (
        <div className="grocery-item" key={index}>
          <p className="title">{grocery}</p>
          <div>
            <FaEdit className="edit-btn" onClick={() => handleEdit(index)} />
            <FaTrash
              className="delete-btn"
              onClick={() => handleDelete(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  groceryList: PropTypes.array,
};

List.defaultProps = {
  groceryList: [],
};

export default List;
