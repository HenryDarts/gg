import "./gallery.scss";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Gallery = () => {
  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="gallery">
      <Navbar backImage={true} />
      {/* <div className="sub-nav-wrap">
        <div className="sub-nav">
          <div className="sub-nav-title">აკადემია</div>

          <div className="sub-nav-links">
            <span className="snl active">ფოტო</span>
            <span className="snl">ვიდეო</span>
            <span className="snl">სიახლეები</span>
          </div>
        </div>
      </div> */}

      <div className="album-wrap">
        <div className="sub-wrap">
          <div className="grid">
            {images.map((image) => (
              <img src={`/images/glp/${image}.JPG`} className="gagra-img" />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
