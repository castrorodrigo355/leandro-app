import React, { useState, useEffect } from "react";
import { Navbar } from "./views/navbar/navbar";
import { User } from "./views/user/user";
import hamburgerIcon from "./icons/hamburger+menu.png";
import "./App.css";

export const App = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/");
        const response = await res.json();
        setUsers(response);
      } catch (error) {
        console.log("TODO MAL");
      }
    }
    getUsers();
  }, []);

  const deleteUser = id => {
    const newUsers = users.filter(x => x.id !== id);
    setUsers(newUsers);
  };

  const openSidebar = () => {
    setOpen(x => !x);
  };

  return (
    <div className="main-container">
      <Navbar />
      <div>
        {users.map(user => {
          return <User key={user.id} user={user} deleteUser={deleteUser} />;
        })}
      </div>
      <div className={`main-container-sidebar ${open ? "is-open" : ""}`}>
        SIDEBAR
      </div>
      <div className="main-container-hamburger" onClick={() => openSidebar()}>
        <img src={hamburgerIcon} alt="..." />
      </div>
    </div>
  );
};
