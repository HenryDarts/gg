import "./footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="tt">კონტაქტი</div>
          <div className="phone">
            <img src="/images/icons/phone.png" alt="" />
            <span>+995 599 99 99 99</span>
          </div>
          <div className="mail">
            <img src="/images/icons/mail.png" alt="" />
            <span>fcgagra@gagra.ge</span>
          </div>
        </div>
        <div className="right">Copyright (c) 2020 FC Gagra</div>
      </div>
    </div>
  );
};

export default Footer;
