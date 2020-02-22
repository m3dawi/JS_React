import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Stateless Functional Component
const NavBar = () => {
  const totalCounters = useSelector(
    state => state.productsInCart.filter(val => val.count > 0).length
  );
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to={"/"} className="navbar-brand">
        NavBar
      </Link>
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to={"/"} className="nav-link">
            Cart
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to={"/products"} className="nav-link">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
