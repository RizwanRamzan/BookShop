import React from "react";
import "./categories.scss";
import { FilterOutlined } from "@ant-design/icons";
import { Col, Row, Select } from "antd";
import { One, OneImg, Two, TwoImg } from "../../assets";
import { useMediaQuery } from "react-responsive";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../../common/CardWrapper";

const Categories = () => {
  const navigate = useNavigate();
  const isMobile992 = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile768 = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="container mt-5 mb-5 categories">
        <div className="filter-select-box">
          <div className="filter">
            <FilterOutlined className="icon" />
            <p>FIlter</p>
          </div>
          <div className="select-box">
            <Select
              defaultValue="Featured"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "sort",
                  label: "Sort",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
        </div>

        <Row gutter={[20, 20]}>
          <CardWrapper
            span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}
            image={OneImg}
            description={"READY TO WERA"}
            onClick={() => navigate("/sub-category")}
          />

          <CardWrapper
            span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}
            image={OneImg}
            description={"M BASICS"}
            onClick={() => navigate("/sub-category")}
          />

          <CardWrapper
            span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}
            image={OneImg}
            description={"READY TO WERA"}
            onClick={() => navigate("/sub-category")}
          />
          <CardWrapper
            span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}
            image={OneImg}
            description={"READY TO WERA"}
            onClick={() => navigate("/sub-category")}
          />
          <CardWrapper
            span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}
            image={OneImg}
            description={"READY TO WERA"}
            onClick={() => navigate("/sub-category")}
          />
          <CardWrapper
            span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}
            image={OneImg}
            description={"READY TO WERA"}
            onClick={() => navigate("/sub-category")}
          />
        </Row>
      </div>
    </>
  );
};

export default Categories;
