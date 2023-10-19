import { Col, Row } from "antd";
import "./sale.scss";
import { useMediaQuery } from "react-responsive";
import React from "react";
import { OneImg, TwoImg } from "../../assets";
import { AiOutlineEye } from "react-icons/ai";
import CardWrapper from "../../common/CardWrapper";

const Sale = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="container mb-5 sale">
        <h2> Sale </h2>
        <Row gutter={[20, 20]}>
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Sateen"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Sateen"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Sateen"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Sateen"}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Sateen"}
          />
        </Row>
      </div>
    </>
  );
};

export default Sale;
