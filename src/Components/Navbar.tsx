import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import Search from "../assets/Logo/search.png";
import User from "../assets/Logo/user.png";
import Cart from "../assets/Logo/cart.png";

const Navbar = () => {
  const [menu, setMenu] = useState<string>("Home");
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <nav className="px-10 py-4 nav-bg flex justify-between items-center h-20">
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
          className="hidden md:mr-12 text-base font-medium"
          onClick={() => {
            setMenu("40+ Internationalbrands");
          }}
        >
          <Link to="/internationalbrands">40+ Internationalbrands</Link>
          {menu === "40+ Internationalbrands" ? <hr /> : <></>}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          {open ? (
            // ❌ Cross icon
            <>
              <span className="w-6 h-0.5 bg-black rotate-45 translate-y-1.5"></span>
              <span className="w-6 h-0.5 bg-black opacity-0"></span>
              <span className="w-6 h-0.5 bg-black -rotate-45 -translate-y-1.5"></span>
            </>
          ) : (
            // ☰ Hamburger icon
            <>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </>
          )}
        </button>

        {open && (
          <div className="absolute top-20 right-0 bg-white shadow-lg md:hidden z-50">
            <ul className="flex flex-col gap-4 p-10 text-base font-normal">
              <li><Link onClick={() => setOpen(false)} to="/internationalbrands">40+ Internationalbrands</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/allwatches">All watches</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/men">Men</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/women">Women</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/store">Store</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/smart">Smart</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/brands">Brands</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/offers">Offers</Link></li>
            </ul>
          </div>
        )}

        <ul className="hidden md:flex justify-between items-center gap-10 text-base font-normal">
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
        <div className="hidden lg:flex justify-between items-center gap-8 text-base font-medium pr-5">
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
      </nav>

      <nav className="flex lg:hidden justify-between items-center gap-5 text-base font-medium pr-5 bg-white px-10 py-1">
        <p className="w-full flex justify-center">
          <Link to="/search" className="w-full md:w-1/2">
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 w-full bg-gray-50">

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent text-sm w-full"
              />

              {/* Search Icon */}
              <img src={Search} alt="search" className="w-5 h-5" />
            </div>
          </Link>
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
      </nav>
    </div>
  );
};

export default Navbar;
