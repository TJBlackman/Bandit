import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import { scrollElementIntoView } from "../utils/scroll-to-element";

const Navbar = (props) => {
  const navRef = useRef();
  const location = useLocation();

  const toggleNav = () => {
    navRef.current.classList.toggle("active");
  };

  const goToSection = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    scrollElementIntoView(id);
    toggleNav();
  };

  const loginLinks = (
    <>
      <ul className="page-nav">
        <li className="nav-item" onClick={toggleNav}>
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item" onClick={toggleNav}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );

  const homeLinkData = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
  ];

  const homeLinks = (
    <>
      <ul className="nav-items">
        {homeLinkData.map((item) => {
          return (
            <li key={item.href} className="nav-item" onClick={goToSection}>
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="page-nav">
        <li className="nav-item" onClick={toggleNav}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );

  const changeNav = () => {
    if (location.pathname === "/") {
      return homeLinks;
    }
    if (location.pathname === "/login") {
      return loginLinks;
    }
  };

  let navMenu = changeNav();

  return (
    <Fragment>
      <nav ref={navRef}>
        <button
          className="closeBtn"
          id="lines"
          aria-label="menu button"
          onClick={toggleNav}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </button>
        {props.icon}
        {navMenu}
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  icon: PropTypes.element.isRequired,
};

Navbar.defaultProps = {
  icon: <img src={Logo} alt="" />,
};

export default Navbar;
