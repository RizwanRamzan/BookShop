import React from "react";
import HomeRoutes from "./routes/HomeRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import SubHeader from "./pages/header/SubHeader";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import New_Arrival from "./pages/new-arrival/New_Arrival";
import Unstitched_Fabrics from "./pages/unstitched-fabrics/Unstitched_Fabrics";
import Ready_Pret from "./pages/ready-pret/Ready_Pret";
import Kids from "./pages/kids/Kids";
import Couture from "./pages/couture/Couture";
import Perfumes from "./pages/perfumes/Perfumes";
import Sale from "./pages/end-of-season/Sale";
import Categories from "./pages/categories/Categories";
import Sub_Categories from "./pages/categories/Sub_Categories";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrival" element={<New_Arrival />} />
          <Route path="/unstitched-fabrics" element={<Unstitched_Fabrics />} />
          <Route path="/ready-pret" element={<Ready_Pret />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/couture" element={<Couture />} />
          <Route path="/perfume" element={<Perfumes />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/detail-page" element={<Sub_Categories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
