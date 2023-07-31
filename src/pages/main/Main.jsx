import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Shorts from "../../components/Shorts/Shorts";
import Stats from "../../components/stats/Stats";
import TeamList from "../../components/teamList/TeamList";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <Navbar backImage={false} />
      <Hero />
      <Shorts />
      <Stats />
      <TeamList titles={true} />
      <Footer />
    </div>
  );
};

export default Main;
