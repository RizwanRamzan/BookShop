import React from "react";
import "./ready_pret.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { OneImg, TwoImg } from "../../assets";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Ready_Pret = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });
  return (
    <>
      <div className="container mb-5 ready-pret">
        <h2> READY TO WEAR </h2>
        <Row gutter={[20, 20]}>
          <Col span={isMobile ? 24 : 6}>
            <div className="wrapper">
              <div className="img">
                <img src={TwoImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> Luxury Formals </p>
              </div>
            </div>
          </Col>
          <Col span={isMobile ? 24 : 6}>
            <div className="wrapper">
              <div className="img">
                <img src={TwoImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> Luxury Formals </p>
              </div>
            </div>
          </Col>
          <Col span={isMobile ? 24 : 6}>
            <div className="wrapper">
              <div className="img">
                <img src={TwoImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> Luxury Pret </p>
              </div>
            </div>
          </Col>
          {/* <Col span={isMobile ? 0 : 8}></Col> */}
          <Col span={isMobile ? 24 : 6}>
            <div className="wrapper">
              <div className="img">
                <img src={TwoImg} alt="" />
                <div className="overlay">
                  <button className="cart">
                    <AiOutlineShoppingCart className="cart-icon" /> Add to cart
                  </button>
                </div>
              </div>
              <div className="info-home">
                <p> M.Luxe </p>
              </div>
            </div>
          </Col>
          {/* <Col span={isMobile ? 0 : 8}></Col> */}
        </Row>
      </div>
    </>
  );
};

export default Ready_Pret;
