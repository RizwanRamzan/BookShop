import React, { useState } from "react";
import "./sub_header.scss";
import { useNavigate } from "react-router-dom";
import New_Arrival from "../new-arrival/New_Arrival.jsx";
// import { Dropdown } from "antd";

const SubHeader = () => {
  const navigate = useNavigate();

  const [activebtn, setActiveBtn] = useState("");

  const handleActiveTab = (type) => {
    setActiveBtn(type);
    if (type === "new-arrival") {
      navigate("/new-arrival");
    } else if (type === "unstitched-fabrics") {
      navigate("/unstitched-fabrics");
    } else if (type === "ready-pret") {
      navigate("/ready-pret");
    } else if (type === "kids") {
      navigate("/kids");
    } else if (type === "couture") {
      navigate("/couture");
    } else if (type === "perfume") {
      navigate("/perfume");
    } else if (type === "sale") {
      navigate("/sale");
    } else if (type === "/") {
      navigate("/");
    }
  };

  // const itemsArrival = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Unstitched
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Luxury Formals
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Luxury Pret
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Kids
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Jewelry
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         All of us
  //       </p>
  //     ),
  //   },
  // ];

  // const itemsFabrics = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Sateen
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         M.Prints
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         M.Luxe Fabrics
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Chiffon
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Lawn
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Velvet
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Silk Net
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Linen
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Silk
  //       </p>
  //     ),
  //   },
  // ];
  // const itemsReadyWear = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Luxury Formals
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Luxury Pret
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Mommy & Me
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Stitched M.Luxe
  //       </p>
  //     ),
  //   },
  // ];

  // const itemsKids = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Kids
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Mommy & Me
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Baba & Me
  //       </p>
  //     ),
  //   },
  // ];

  // const itemsWeddingWear = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Bridals
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Formals
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Mehndi
  //       </p>
  //     ),
  //   },
  // ];

  // const itemsJewelry = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         All
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Signature
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Earrings
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Bangels/Bracelets
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Tikka/Jhoomer
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Rings
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Necklace
  //       </p>
  //     ),
  //   },
  // ];

  // const itemsSale = [
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         All
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Unstitched
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Ready to wear
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Kids
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Jewelry
  //       </p>
  //     ),
  //   },
  //   {
  //     label: (
  //       <p target="_blank" href="https://www.antgroup.com">
  //         Couture
  //       </p>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="tab">
            <p
              onClick={() => handleActiveTab("new-arrival")}
              className={activebtn === "new-arrival" ? "activeClass" : ""}
            >
              NEW ARRIVALS
            </p>
            <p
              onClick={() => handleActiveTab("unstitched-fabrics")}
              className={
                activebtn === "unstitched-fabrics" ? "activeClass" : ""
              }
            >
              UNSTITCHED FABRICS
            </p>
            <p
              onClick={() => handleActiveTab("ready-pret")}
              className={activebtn === "ready-pret" ? "activeClass" : ""}
            >
              READY TO WEAR
            </p>
            <p
              onClick={() => handleActiveTab("kids")}
              className={activebtn === "kids" ? "activeClass" : ""}
            >
              KIDS
            </p>
            <p
              onClick={() => handleActiveTab("couture")}
              className={activebtn === "couture" ? "activeClass" : ""}
            >
              COUTURE
            </p>
            <p
              onClick={() => handleActiveTab("weddingWear")}
              className={activebtn === "weddingWear" ? "activeClass" : ""}
            >
              WEDDING WEAR
            </p>
            <p
              onClick={() => handleActiveTab("jewelry")}
              className={activebtn === "jewelry" ? "activeClass" : ""}
            >
              JEWELRY
            </p>
            <p
              onClick={() => handleActiveTab("perfume")}
              className={activebtn === "perfume" ? "activeClass" : ""}
            >
              PERFUMES
            </p>
            <p
              onClick={() => handleActiveTab("sale")}
              className={activebtn === "sale" ? "activeClass" : ""}
            >
              END OF SEASON SALE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
