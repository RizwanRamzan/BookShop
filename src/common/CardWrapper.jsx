import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TwoImg } from "../assets";
import { Col } from "antd";
import { useNavigate } from "react-router-dom";

const CardWrapper = ({ span, image, description, onClick }) => {
  return (
    <>
      <Col span={span}>
        <div className="wrapper">
          <div className="img">
            <img src={image} alt="" />
            <div className="overlay">
              <button className="cart" onClick={onClick}>
                <AiOutlineShoppingCart className="cart-icon" /> Add to cart
              </button>
            </div>
          </div>
          <div className="info-home">
            <p> {description} </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardWrapper;
