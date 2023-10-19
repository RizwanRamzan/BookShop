import React from "react";
import "./footer.scss";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { Logo } from "../../assets";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-top-content">
            <div className="first-row">
              <ul>
                <li>
                  <img src={Logo} alt="" />
                </li>
                <li>Unstitched Fabrics</li>
                <li>Ready To Wear</li>
                {/* <li>Kids</li>
                <li>Wedding Wear</li> */}
                <li>
                  <div className="num">
                    <p>
                      <BsTelephone className="footer-icon" />
                    </p>
                    <p> +92 321 122 4333 </p>
                  </div>
                </li>
                <li>
                  <div className="msg">
                    <p>
                      <BsEnvelope className="footer-icon" />
                    </p>
                    <p> help@mariab.ae </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="second-row">
              <ul>
                <li>
                  <h4>Quick Links</h4>
                </li>
                <li>Returns and Exchange</li>
                <li>Privacy Policy</li>
                <li>FAQs</li>
                <li>Track Your Order</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="third-row">
              <ul>
                <li>
                  <h4>Books Categories</h4>
                </li>
                <li> About Maria.B </li>
                <li>Contact Us</li>
                <li>Store Locator</li>
                <li> Careers </li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div className="fourth-row">
              <h4> Signup For Our Newsletter </h4>
              <div className="input-group">
                <input type="text" placeholder="Enter your email" />
                <button className="subscribe"> SUBSCRIBE </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              {/* <div className="num">
                <p>
                  <BsTelephone className="footer-icon" />
                </p>
                <p> +92 321 122 4333 </p>
              </div>
              <div className="msg">
                <p>
                  <BsEnvelope className="footer-icon" />
                </p>
                <p> help@mariab.ae </p>
              </div> */}
            </div>
            {/* <div className="footer-bottom-right">
              <div className="fb">
                <p>
                  <FacebookOutlined className="footer-icon" />
                </p>
                <p> Facebook </p>
              </div>
              <div className="insta">
                <p>
                  <InstagramOutlined className="footer-icon" />
                </p>
                <p> Instagram </p>
              </div>
              <div className="twitter">
                <p>
                  <TwitterOutlined className="footer-icon" />
                </p>
                <p> Twitter </p>
              </div>
            </div> */}
          </div>
          <hr className="line" />

          <div className="footer-bottom-last">
            <p>MARIA.BAll rights reserved © 2023</p>
            <div className="footer-bottom-right">
              <div className="fb">
                <p>
                  <FaFacebookF className="footer-icon" />
                </p>
              </div>
              <div className="insta">
                <p>
                  <FiInstagram className="footer-icon" />
                </p>
              </div>
              <div className="twitter">
                <p>
                  <BsTwitter className="footer-icon" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
