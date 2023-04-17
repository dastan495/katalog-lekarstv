import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-main">
        <div className="footer-box-main">
          <h1>Контакты</h1>
          <p className="number">996(553) 46-91-11</p>
          <p className="number">996(501) 46-91-11</p>
          <p className="number">996(755) 46-91-11</p>
        </div>
        <div className="footer-box-main">
          <h1>График работы</h1>
          <p>Выходные дни суббота и воскресенье Обеденое время 12:00-13:00</p>
          <h3>
            Понедельник - Пятница, <br />
            09:00 - 18:00
          </h3>
        </div>
        <div className="footer-box-main">
          <h1>Адрес</h1>
          <p>г.Ош, ул.Шакирова, 275</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
