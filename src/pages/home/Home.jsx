import React from "react";
import "./home.scss";
import { Carousel, Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { OneImg } from "../../assets";
import { ImageData } from "./constant";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="main">
          <Carousel
            autoplay
            effect="fade"
            dots={false}
            className="mb-4 carousel"
          >
            {ImageData.map((item) => (
              <div className="slider-img">
                <img src={item?.img} alt="" />
              </div>
            ))}
          </Carousel>

          <Row gutter={[20, 20]}>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" />
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> READY TO WERA </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> M BASICS </p>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart span-12"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> JEWELRY </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> PERFUMES </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> KIDS </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> M BASICS </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> M BASICS </p>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart span-12"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> UNSTITCHED FABRICS </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> KIDS </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrapper">
                <div className="img">
                  <img src={OneImg} alt="" />
                  <div className="overlay">
                    <button
                      className="cart"
                      onClick={() => navigate("/new-arrival")}
                    >
                      <AiOutlineShoppingCart className="cart-icon" /> Add to
                      cart
                    </button>
                  </div>
                </div>
                <div className="info-home">
                  <p> PERFUMES </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
