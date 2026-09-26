import React from "react";
import "./seven.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="up-footer">
          <div>
            <img
              className="logo-footer"
              src="../images/logo-transparent-svg.svg"
              alt="images"
            />
          </div>
          <div>
            <ul className="footer-list">
              <a href="">
                <li style={{ marginBottom: 20 }}>Home</li>
              </a>
              <a href="">
                <li style={{ marginBottom: 20 }}>About us</li>
              </a>
              <a href="">
                <li style={{ marginBottom: 20 }}>Service</li>
              </a>
              <a href="">
                <li style={{ marginBottom: 20 }}>Contact us</li>
              </a>
            </ul>
          </div>
          <div className="contect">
            <h4>CONTACTS</h4>
            <div className="address">
              <p>
                <img
                  src="../images/address-logo2.png"
                  className="w-5 h-5"
                  alt=""
                  width={19}
                  height={19}
                />
                <span>
                  IMC Palash Parishar 1, B01
                  <br />
                  Indore,India 452012
                </span>
              </p>
              <p>
                <img
                  src="../images/call-logo2.png"
                  alt=""
                  width={19}
                  height={19}
                />{" "}
                <a href="" style={{ color: "white", textDecoration: "none" }}>
                  +917879305711
                </a>
              </p>
              <p>
                <img
                  src="../images/mail-logo2.png"
                  alt=""
                  width={19}
                  height={19}
                />
                <a style={{ color: "white", textDecoration: "none" }} href="">
                  {" "}
                  vermaop6262@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 style={{ marginLeft: 37 }}>FOLLOW US</h4>
            <div className="icons">
              <ul className="footer-icon-list">
                <li>
                  <img src="../images/instagram.png" alt="" />
                </li>
                <li>
                  <img src="../images/facebook.png" alt="" />
                </li>
                <li>
                  <img src="../images/twitter.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="copyright">
            <p>© 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
