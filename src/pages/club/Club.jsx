import "./club.scss";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Audit from "../../components/audit/Audit";
import Footer from "../../components/Footer/Footer";
import Board from "../../components/board/Board";

const Club = () => {
  return (
    <div className="club">
      <Navbar backImage={true} />
      <Audit />
      <img src="/images/assets/history.png" alt="" className="history" />
      <Board />
      <Footer />
    </div>
  );
};

export default Club;
