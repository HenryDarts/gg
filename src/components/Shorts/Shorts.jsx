import React from "react";
import "./shorts.scss";

const Shorts = () => {
  return (
    <div className="shorts">
      <div className="wrapper">
        <div className="left">
          <div className="top">
            <div className="title">სიახლეები</div>
            <div className="more">
              <div className="txt">ყველა სიახლე</div>
              <img src="/images/icons/more-i.png" alt="" className="icon" />
            </div>
          </div>
          <div className="mid">
            <div className="card">
              <img
                src="/images/assets/card-img.png"
                alt=""
                className="card-img"
              />

              <div className="txt-info">
                <div className="d-p">აპრილი 6, 2023</div>
                <div className="card-title">ბრაზილიელი შემტევი გაგრაში</div>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/assets/card-img.png"
                alt=""
                className="card-img"
              />

              <div className="txt-info">
                <div className="d-p">აპრილი 6, 2023</div>
                <div className="card-title">ბრაზილიელი შემტევი გაგრაში</div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="card">
              <img
                src="/images/assets/card-img.png"
                alt=""
                className="card-img"
              />

              <div className="txt-info">
                <div className="d-p">აპრილი 6, 2023</div>
                <div className="card-title">ბრაზილიელი შემტევი გაგრაში</div>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/assets/card-img.png"
                alt=""
                className="card-img"
              />

              <div className="txt-info">
                <div className="d-p">აპრილი 6, 2023</div>
                <div className="card-title">ბრაზილიელი შემტევი გაგრაში</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="title">ვიდეო</div>
            <div className="more">
              <div className="txt">ყველა სიახლე</div>
              <img src="/images/icons/more-i.png" alt="" className="icon" />
            </div>
          </div>

          <div className="videos">
            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/uy2mO6-3XZM"
                title="YouTube Video"
                className="thumb"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/QkRjJZ2BmoU"
                title="YouTube Video"
                className="thumb"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/Dw2kWmN23c8"
                title="YouTube Video"
                className="thumb"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/S-mUb-raZj4"
                title="YouTube Video"
                className="thumb"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorts;
