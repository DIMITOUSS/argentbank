import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../action/userReducer"; // Import de l'action updateUserName depuis votre fichier d'actions

import "./EditName.css";

const EditName = ({ setIsEditing }) => {
  const userProfile = useSelector((state) => state.user.userProfile); // Access user from the Redux store
  const dispatch = useDispatch(); // Obtaining the dispatch function

  // Local state to store the new user name
  const [newUserName, setNewUserName] = useState(userProfile?.userName || "");

  // Handling user name change
  const handleUserNameChange = (e) => {
    setNewUserName(e.target.value); // Updating local state with the input value
  };

  // Handling saving the new user name
  const handleSave = () => {
    dispatch(updateUserName(newUserName)) // Dispatching the updateUserName action with the new user name
      setIsEditing(false); // Exit editing mode after saving
  };

  // Handling canceling the user name modification
  const handleCancel = () => {
    setNewUserName(userProfile?.userName || "");
    setIsEditing(false);
  };

  return (
    <div>
      <div className="edit-form">
        <h3>Edit User info</h3>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={newUserName}
            onChange={handleUserNameChange}
          />
        </div>
      </div>
      <div className="btn-form">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};


export default EditName;
