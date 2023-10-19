import React from "react";
import "./kids.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { OneImg, TwoImg } from "../../assets";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Kids = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });
  return (
    <>
      <div className="container mb-5 kids">
        <h2> KIDS </h2>
        <Row gutter={[20, 20]}>
          <Col span={isMobile ? 24 : 8}>
            <div className="wrapper">
              <div className="img">
                <img src={OneImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> kids </p>
              </div>
            </div>
          </Col>
          <Col span={isMobile ? 24 : 8}>
            <div className="wrapper">
              <div className="img">
                <img src={OneImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> Mommy & Me </p>
              </div>
            </div>
          </Col>
          <Col span={isMobile ? 24 : 8}>
            <div className="wrapper">
              <div className="img">
                <img src={OneImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> Baba & Me </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Kids;
