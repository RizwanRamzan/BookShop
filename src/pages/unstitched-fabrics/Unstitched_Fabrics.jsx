import React from "react";
import "./unstitched_fabrics.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { OneImg, TwoImg } from "../../assets";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CardWrapper from "../../common/CardWrapper";

const Unstitched_Fabrics = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });

  return (
    <>
      <div className="container mb-5 unstitched-fabrics">
        <h2> UNSTITCHED FABRICS </h2>
        <Row gutter={[20, 20]}>
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Sateen"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"M.Prints"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"M.Luxe Fabrics"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Chiffon"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Lawn"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Lawn"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Lawn"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Lawn"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={OneImg}
            description={"Lawn"}
          />
        </Row>
      </div>
    </>
  );
};

export default Unstitched_Fabrics;
