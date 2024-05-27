import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";
//=======================Navbar Links Array===============>>
const data = [
  {
    label: "All Blogs",
    to: "/",
  },
  {
    label: "Login",
    to: "/login",
  },

  {
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    label: "Profile",
    to: "/profile",
  },
];
//=================End==============>>
const Navbar = () => {
  //===================States==============>>
  const [toggleIcon, setToggleIcon] = useState(false);
  //================End================>>

  //=======================Toggle Function=================>>
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  //======================End===============>>
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            {/* <FaReact size={30} /> */}
            <h1>Blogging App</h1>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((items, index) => {
            return (
              <li key={index} className="navbar__container__menu__item">
                <Link
                  className="navbar__container__menu__item__links"
                  to={items.to}
                >
                  {items.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* =============Toggle work=================>> */}
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon === true ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
