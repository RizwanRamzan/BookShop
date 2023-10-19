import React, { useState } from "react";
import Header from "../header/Header.jsx";
import "./main_page.scss";
import SubHeader from "../header/SubHeader.jsx";

const Main__Page = () => {
  const [activebtn, setActiveBtn] = useState("");

  const handleActiveTab = (type) => {
    setActiveBtn(type);
  };

  return (
    <>
      {/* <Header /> */}
      <SubHeader />
      {/* <div className="sub-header">
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
            <p> WEDDING WEAR </p>
            <p> JEWELRY </p>
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
      </div> */}
    </>
  );
};

export default Main__Page;
