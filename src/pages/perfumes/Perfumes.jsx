import React, { useState } from "react";
import "./perfumes.scss";
import { Col, Modal, Row, Select } from "antd";
import { useMediaQuery } from "react-responsive";
import { AiOutlineHeart } from "react-icons/ai";
import { FilterOutlined } from "@ant-design/icons";
import { PerfumeData } from "./constant";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { OneImg } from "../../assets";
import { BsPlusLg } from "react-icons/bs";

const Perfumes = () => {
  const isMobile992 = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile768 = useMediaQuery({ query: "(max-width: 768px)" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setCount(0);
  };
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

  return (
    <>
      <div className="container mb-5 mt-5 perfume">
        <div className="filter-select-box">
          <div className="filter">
            <FilterOutlined className="icon" />
            <p>FIlter</p>
          </div>
          <div className="select-box">
            <Select
              defaultValue="Date, new to old"
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
          {PerfumeData.map((item) => (
            <Col span={isMobile992 ? (isMobile768 ? 24 : 8) : 6}>
              <div className="card">
                <div className="img">
                  <img src={item?.img} alt="" />
                  <div className="overlay">
                    <button className="cart" onClick={showModal}>
                      <AiOutlineEye className="cart-icon" /> Quick view
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <p> P-Vanilla </p>
                  <div className="size-price">
                    <div className="size"></div>
                  </div>
                </div>
                <AiOutlineHeart className="heart" />
                <button className="new"> -15% </button>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal  */}

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <div className="modal-box">
          <div className="modal-box-content">
            <div className="modal-box-content-top">
              <div className="modal-img">
                <img src={OneImg} alt="" />
              </div>
              <div className="info">
                <h4> MARIA B. COUTURE PEARL </h4>
                <p> MC-801-B-S </p>
                <p> In Stock </p>
              </div>
            </div>
            <div className="desc">
              <h6> Description </h6>
              <p>
                It is accompanied by a net dupatta with an all over panni spray
                with a heavier handworked head border and a more delicate border
                along the three sides.
              </p>
            </div>
            <div className="quantity">
              <h6> Quantity </h6>
              <div className="plus-minus">
                <AiOutlineMinus className="minus" onClick={handleMinusCount} />{" "}
                {count}
                <BsPlusLg className="plus" onClick={handlePlusCount} />
              </div>
            </div>
            <div className="disclimer">
              <p>
                <span> Disclaimer: </span> Product Color May Vary Slightly Due
                To Photographic Lighting Or Your Device Settings.
              </p>
            </div>
            <div className="making-time">
              <p>
                <span>Making Time: </span> 9 WEEKS
              </p>
            </div>
            <button className="book" onClick={handleCancel}>
              Order a book
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Perfumes;
