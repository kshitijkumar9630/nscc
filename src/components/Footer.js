import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="gtco-footer" className="gtco-section" role="contentinfo">
        <div className="gtco-container">
          <div className="row row-pb-md">
            <div className="col-md-4 gtco-widget gtco-footer-paragraph">
              <br />
              <img
                className="logo-footer"
                src="logo/NsccWhiteCrop.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus placerat enim et urna sagittis, rhoncus euismod.
              </p>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6 gtco-footer-link">
                  <br />
                  <h3>Links</h3>
                  <ul className="gtco-list-link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 gtco-footer-link">
                  <br />
                  <h3>Work</h3>
                  <ul className="gtco-list-link">
                    <li>
                      <a href="#">New York Arena</a>
                    </li>
                    <li>
                      <a href="#">Eagle Park</a>
                    </li>
                    <li>
                      <a href="#">Nationals Park</a>
                    </li>
                    <li>
                      <a href="#">Manila Park</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 gtco-footer-link mt-5">
              <br />
              <h3>Social</h3>

              {/* <a href="#">
                <i className="icon-facebook" />
              </a>

              <a href="#">
                <i className="icon-instagram" />
              </a>

              <a href="#">
                <i className="icon-message" />
              </a>

              <a href="#">
                <i className="icon-mail" />
              </a> */}
              {/* 
              <ul className="gtco-list-link-social">
                <li>
                  <a href="#">
                    <i className="icon-mail" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-message" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
              </ul> */}
              <a href="mailto:kshitijkumar9630@gmail.com">
                <img src="icons/gmail.png" className="social-icons" />
              </a>
              <a href="https://wa.me/917751005076">
                <img src="icons/whatsapp.png" className="social-icons" />
              </a>
              <a href="https://facebook.com/kshitij.kumar.790">
                <img src="icons/facebook.png" className="social-icons" />
              </a>
              <a href="http://www.instagram.com/__kshitij_kumar__">
                <img
                  src="icons/instagram.png"
                  className="social-icons-instagram"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="gtco-copyright">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-6 text-center">
                <p>
                  <small>© 2021 NSCC. All Rights Reserved. </small>
                </p>
              </div>
              <div className="col-md-6 text-center">
                <p>
                  <small>
                    Developed by &nbsp;
                    <a href="" target="_blank">
                      Kshitij Kumar
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
