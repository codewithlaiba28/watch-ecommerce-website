import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState<string>("Home");
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            setMenu("Home");
            localStorage.setItem("menu", "Home");
          }}
        >
          {menu === "Home" ? <hr /> : <></>}
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("40+ Internationalbrands");
          }}
        >
          <Link to="/internationalbrands">40+ Internationalbrands</Link>
          {menu === "40+ Internationalbrands" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("All watches");
          }}
        >
          <Link to="/allwatches">All watches</Link>
          {menu === "All watches" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Store");
          }}
        >
          <Link to="/store">Store</Link>
          {menu === "Store" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Smart");
          }}
        >
          <Link to="/smart">Smart</Link>
          {menu === "Smart" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Offers");
          }}
        >
          <Link to="/offers">Offers</Link>
          {menu === "Offers" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Brands");
          }}
        >
          <Link to="/brands">Brands</Link>
          {menu === "Brands" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link to="/contact">Contact</Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Cart");
          }}
        >
          <Link to="/cart">Cart</Link>
          {menu === "Cart" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
