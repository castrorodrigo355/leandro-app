import React, { useState, useEffect } from "react";
import { Navbar } from "./views/navbar/navbar";
import { User } from "./views/user/user";

export const App = () => {
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

  return (
    <div>
      <Navbar />
      <div>
        {users.map(user => {
          return <User key={user.id} user={user} deleteUser={deleteUser} />;
        })}
      </div>
    </div>
  );
};
