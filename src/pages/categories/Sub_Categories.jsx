import React, { useState } from "react";
import "./sub_categories.scss";
import { AiOutlineMinus } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { BsPlusLg } from "react-icons/bs";
import { One, OneImg, TwoImg } from "../../assets";
import { Col, Row } from "antd";
const Sub_Categories = () => {
  const [count, setCount] = useState(0);

  const handlePlusCount = () => {
    setCount(count + 1);
  };
  const handleMinusCount = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="container mt-5 mb-5">
        <Row gutter={[20, 20]}>
          <Col span={isMobile ? 0 : 4}></Col>
          <Col span={isMobile ? 24 : 8}>
            <div className="img">
              <img src={TwoImg} alt="" />
            </div>
          </Col>
          <Col span={isMobile ? 24 : 8}>
            <div className="sub-categories-right">
              <div className="title">
                <h1> Shirt Red MBK-EA23-55 </h1>
                <p> MBK-EA23-55-RED-2-3 IN STOCK </p>
              </div>

              <h4> SEASON: PRE-FALL 2023 </h4>
              <div className="price">
                <h3> PKR 1,690 </h3>
                <p> Prices are inclusive of the GST. </p>
              </div>
              <div className="quantity">
                <h3> Quantity </h3>
                <div className="plus-minus">
                  <AiOutlineMinus
                    className="minus"
                    onClick={handleMinusCount}
                  />
                  {count}
                  <BsPlusLg className="plus" onClick={handlePlusCount} />
                </div>
              </div>
              <div className="discalimer">
                <p>
                  <span>Disclaimer:</span> Product Color May Vary Slightly Due
                  To Photographic Lighting Or Your Device Settings.
                </p>
              </div>
              <div className="description">
                <h3> Description </h3>
                <p>1 Piece</p>
                <p> Shirt Fabric: Dobby Lawn </p>
                <p>
                  Reglan sleeves with gathered neckline top featuring lace
                  details.
                </p>
              </div>
            </div>
          </Col>
          <Col span={isMobile ? 0 : 4}></Col>
        </Row>
      </div>
    </>
  );
};

export default Sub_Categories;
