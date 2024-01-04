import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>金沢旅日記</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
