import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  /* Close and open toggle */
  const [active, setActive] = useState('navbar');
  const showNav = () => {
    setActive('navbar activeNavbar');
  }
  const closeNav = () => {
    setActive('navbar');
  }

  return (
    <section className="navBarSection">
      <div className="header">

        <div className="logoDiv">
          <Link to="/home">
            <a href="#" className="logo">
              <h1 className="flex"><MdTravelExplore className="icon" />Travel</h1>
            </a>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Products</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <div className="headerBtns flex">
              <Link to="/">
                <button className="btn loginBtn">
                  <a href="#">Login</a>
                </button>
              </Link>
              <Link to="/register">
                <button className="btn">
                  <a href="#">Sing Up</a>
                </button>
              </Link>
            </div>

          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

      </div>
    </section>
  );
};

export default Navbar;