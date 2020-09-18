import React from "react";
import profileIcon from "../../icons/profile-icon.svg";
import "./navbar.css";

const menuItems = [
  { id: 0, item: "Home", url: "/home" },
  { id: 1, item: "About", url: "/about" },
  { id: 2, item: "Users", url: "/users" }
];

export const Navbar = () => {
  return (
    <div className="navbar--main--container">
      <div className="navbar--main--container--logo">
        <img src={profileIcon} alt="..." />
      </div>
      <div className="navbar--main--container--items">
        {menuItems.map(element => {
          // Despues de que instales react-router-dom
          // Agregar etiquetas "LINK to"
          return (
            //   <Link to={element.url}>
            <div key={element.id}>{element.item}</div>
            //   </Link>;
          );
        })}
      </div>
    </div>
  );
};
