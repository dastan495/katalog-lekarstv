import React, { useState } from "react";
import "./Header.css";
import "./HeaderAdaptive.css";
//
import facebook from "../../image/Facebook-icon.png";
import Instagram from "../../image/Instagram-icon.png";
import YouTube from "../../image/YouTube-icon.png";
import burger from "../../image/Group 4889.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="header_container">
      <div className="header_main container">
        <img onClick={() => navigate("/")} src="" alt="logo" />
        <div className="katalog">
          <p>Про лекарство</p>
          <p onClick={() => navigate("/katalog")}>Каталог</p>
          <p>Противопоказания</p>
          <p>частые вопросы</p>
          <p>контакты</p>
          <div className="polosa"></div>

          <div className="icons">
            <img src={facebook} alt="log" />
            <img src={Instagram} alt="log" />
            <img src={YouTube} alt="log" />
          </div>
        </div>
        {!isMenuOpen && (
          // <button className="bur" onClick={() => setIsMenuOpen(true)}>
          <img
            className="bur"
            onClick={() => setIsMenuOpen(true)}
            src={burger}
            alt=""
          />
          // </button>
        )}
        {isMenuOpen && (
          <img
            className="bur"
            onClick={() => setIsMenuOpen(false)}
            src={burger}
            alt=""
          />
          // <button onClick={() => setIsMenuOpen(false)}>&times;</button>
        )}
        {isMenuOpen && (
          <div onClick={() => "/"} style={{}} className="menu">
            <a style={{ textDecoration: "none", fontSize: "25px" }} href="/">
              Главная
            </a>
            <br />
            <a
              style={{ textDecoration: "none", fontSize: "25px" }}
              href="/about"
            >
              О нас
            </a>
            <br />
            <a
              style={{ textDecoration: "none", fontSize: "25px" }}
              href="/contact"
            >
              Контакты
            </a>
            <br />
          </div>
        )}
        {/* <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="menu">
            <a href="/">Главная</a>
            <a href="/about">О нас</a>
            <a href="/contact">Контакты</a>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
