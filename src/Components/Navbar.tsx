import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import Search from "../assets/Logo/search.png";
import User from "../assets/Logo/user.png";
import Cart from "../assets/Logo/cart.png";

const Navbar = () => {
  const [menu, setMenu] = useState<string>("Home");
  return (
    <div className="px-10 py-4 bg-red-500 flex justify-between items-center  h-20">
      <div className="items-center text-center mr-16">
        <h1
          className="Leckerli text-3xl"
          onClick={() => {
            setMenu("Home");
            localStorage.setItem("menu", "Home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Wayne
          </Link>
        </h1>
        <p className="font-light text-sm">
          Watch Store
        </p>
      </div>
      <div
        className="mr-12 text-base font-medium"
        onClick={() => {
          setMenu("40+ Internationalbrands");
        }}
      >
        <Link to="/internationalbrands">40+ Internationalbrands</Link>
        {menu === "40+ Internationalbrands" ? <hr /> : <></>}
      </div>
      <ul className="flex justify-between items-center gap-10 text-base font-normal">
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
            setMenu("Brands");
          }}
        >
          <Link to="/brands">Brands</Link>
          {menu === "Brands" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Offers");
          }}
        >
          <Link to="/offers">Offers</Link>
          {menu === "Offers" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="flex justify-between items-center gap-8 text-base font-medium pr-5">
        <p
          onClick={() => {
            setMenu("Search");
          }}
        >
          <Link to="/search"><img src={Search} alt="" /></Link>
          {menu === "" ? <hr /> : <></>}
        </p>
        <p
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link to="/contact"><img src={User} alt="" /></Link>
          {menu === "" ? <hr /> : <></>}
        </p>
        <p
          onClick={() => {
            setMenu("Cart");
          }}
        >
          <Link to="/cart"><img src={Cart} alt="" /></Link>
          {menu === "" ? <hr /> : <></>}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
