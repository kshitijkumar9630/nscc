import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="gtco-nav  glassmorph anti-glassmorph"
        role="navigation"
        position="fixed-top"
      >
        <div className="gtco-container">
          <div className="row">
            <div className="col-sm-2 col-xs-12">
              <div id="gtco-logo">
                <NavLink to="/">
                  <img
                    className="logo-navbar"
                    src="logo/NsccBlackCrop.png"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>

            <div className="col-xs-10 text-right menu-1">
              <ul>
                <li className="active">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="has-dropdown">
                  <Link to="/Services">Services</Link>
                  <ul className="dropdown">
                    <li>
                      <NavLink to="/architecture">Architecture</NavLink>
                    </li>
                    <li>
                      <Link to="/interior">Interior</Link>
                    </li>
                    <li>
                      <Link to="/construction">Construction</Link>
                    </li>
                    <li>
                      <Link to="">Demo</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
