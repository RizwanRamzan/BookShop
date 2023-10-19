import React, { useState } from "react";
import "./header.scss";
import { FaTruckFast } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsHeart, BsFillBagFill } from "react-icons/bs";
import { AlignLeftOutlined } from "@ant-design/icons";
import { BiUser } from "react-icons/bi";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Logo } from "../../assets";

const Header = () => {
  const navigate = useNavigate();
  const [activebtn, setActiveBtn] = useState("");

  const handleActiveTab = (type) => {
    setActiveBtn(type);
    navigate("/");
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <div className="main-top-head">
        <div className="container">
          <div className="top-head">
            <div className="price">
              <p> Free Shipping Over PKR 5000 </p>
            </div>
            <div className="phone">
              <p>
                <BsTelephone /> +92 321 122 4333
              </p>
            </div>
          </div>
        </div>
        {/* <div className="filter-buttons-mbl">
          <button
            onClick={() => handleActiveTab("Maria.B")}
            className={activebtn === "Maria.B" ? " active" : "filter-btn"}
          >
            MARIA.B
          </button>
          <button
            onClick={() => handleActiveTab("M.BASICS")}
            className={activebtn === "M.BASICS" ? " active" : "filter-btn"}
          >
            M.BASICS
          </button>
        </div> */}
      </div>
      <div className="header">
        <div className="container header-content">
          {/* <div className="filter-buttons">
            <button
              onClick={() => handleActiveTab("Maria.B")}
              className={activebtn === "Maria.B" ? " active" : "filter-btn"}
            >
              MARIA.B
            </button>
            <button
              onClick={() => handleActiveTab("M.BASICS")}
              className={activebtn === "M.BASICS" ? " active" : "filter-btn"}
            >
              M.BASICS
            </button>
          </div> */}
          <div className="bars">
            <AlignLeftOutlined onClick={showDrawer} />
          </div>
          <div className="logo-name" onClick={() => handleActiveTab("home")}>
            <img src={Logo} alt="" />
          </div>
          <div className="icons">
            <BsHeart className="icon" />
            <BiUser className="icon" />
            <CiSearch className="icon" />
            <AiOutlineShoppingCart className="icon" />
          </div>
        </div>
      </div>

      {/* drawer  */}

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p className="head-drawer">
          <FaTruckFast className="truck" /> TRACK YOUR ORDER
        </p>
        <p
          onClick={() => {
            navigate("/new-arrival");
            setOpen(false);
          }}
        >
          NEW ARRIVALS
        </p>
        <p
          onClick={() => {
            navigate("/unstitched-fabrics");
            setOpen(false);
          }}
        >
          UNSTITCHED FABRICS
        </p>
        <p
          onClick={() => {
            navigate("/ready-pret");
            setOpen(false);
          }}
        >
          READY TO WEAR
        </p>
        <p
          onClick={() => {
            navigate("/kids");
            setOpen(false);
          }}
        >
          KIDS
        </p>
        <p> M.BASICS </p>
        <p
          onClick={() => {
            navigate("/couture");
            setOpen(false);
          }}
        >
          COUTURE
        </p>
        <p> WEDDING WEAR </p>
        <p> JEWELRY </p>
        <p
          onClick={() => {
            navigate("/perfume");
            setOpen(false);
          }}
        >
          PERFUMES
        </p>
        <p
          onClick={() => {
            navigate("/sale");
            setOpen(false);
          }}
        >
          END OF SEASON SALE
        </p>
      </Drawer>
    </>
  );
};

export default Header;
