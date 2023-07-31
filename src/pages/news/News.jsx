import "./news.scss";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import NewsGrid from "../../components/newsGrid/NewsGrid";

const News = () => {
  return (
    <div className="news">
      <Navbar backImage={true} />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default News;
