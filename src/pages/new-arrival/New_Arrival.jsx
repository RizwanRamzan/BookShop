import React from "react";
import "./new_arrival.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { OneImg, TwoImg } from "../../assets";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../../common/CardWrapper";

const New_Arrival = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });
  const navigate = useNavigate();
  return (
    <>
      <div className="container mb-5 new-arrival">
        <h2> New Arrival </h2>
        <Row gutter={[20, 20]}>
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"READY TO WERA"}
            onClick={() => navigate("/detail-page")}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Luxury Formals"}
            onClick={() => navigate("/detail-page")}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Luxury Pret"}
            onClick={() => navigate("/detail-page")}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"Kids"}
            onClick={() => navigate("/detail-page")}
          />
          <CardWrapper
            span={isMobile ? 24 : 6}
            image={TwoImg}
            description={"All of Us"}
            onClick={() => navigate("/detail-page")}
          />
        </Row>
      </div>
    </>
  );
};

export default New_Arrival;
