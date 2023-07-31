import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";

const Navbar = ({ backImage }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={backImage ? "navbar large" : "navbar"}>
      <div className="wrapper">
        <img src="/images/logos/gagra.png" alt="" className="logo" />

        <div className="links">
          <Link to={"/"} className={pathname === "/" ? "link active" : "link"}>
            მთავარი
          </Link>
          <Link
            to={"/club"}
            className={pathname === "/club" ? "link active" : "link"}
          >
            კლუბი
          </Link>
          <Link
            to={"/news"}
            className={pathname === "/news" ? "link active" : "link"}
          >
            სიახლეები
          </Link>
          <Link
            className={pathname === "/team" ? "link active" : "link"}
            to={"/team"}
          >
            გუნდი
          </Link>
          <Link
            to={"/gallery"}
            className={pathname === "/gallery" ? "link active" : "link"}
          >
            გალერია
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
