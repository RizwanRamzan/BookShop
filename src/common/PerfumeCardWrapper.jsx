import { Col } from "antd";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const PerfumeCardWrapper = ({ span, image, description, onClick }) => {
  return (
    <>
      <Col span={span}>
        <div className="card">
          <div className="img">
            <img src={image} alt="" />
            <div className="overlay">
              <button className="cart" onClick={onClick}>
                <AiOutlineEye className="cart-icon" /> Quick view
              </button>
            </div>
          </div>
          <div className="card-body">
            <p> {description} </p>
            {/* <h6> ON PER-ORDER </h6> */}
          </div>
          <AiOutlineHeart className="heart" />
          <button className="new"> -25% </button>
        </div>
      </Col>
    </>
  );
};

export default PerfumeCardWrapper;
