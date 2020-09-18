import React from "react";
import "./user.css";

export const User = ({ user, deleteUser }) => {
  return (
    <div className="user--main--container">
      <div>{user.name}</div>

      <div>{user.email}</div>
      <div>{user.website}</div>
      <div>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
};
