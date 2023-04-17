import React from "react";
import "../Home/Home.css";
import { prodArr } from "../../consts";

const Katalog = () => {
  return (
    <div className="section3 container">
      <h1>Каталог</h1>
      {prodArr?.map((item) => (
        <div className="section-block-3-left">
          <div className="main-3">
            <div className="imaage_left_3" key={item.id}>
              <img src={item.img} alt="" />
            </div>
            <div>
              <h1 style={{ alignItems: "center" }}>
                Софобувир{" "}
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "100",
                    alignItems: "center",
                  }}
                >
                  (Производства Натко Фарма)
                </span>
              </h1>
              <div className="title_3e">
                <p>
                  ингибитор РНК-полимеразы NS5B, что подавляет репликацию
                  (размножение) вируса гепатита С. Это препарат прямого
                  противовирусного действия. В 28 таблетках
                </p>
              </div>
              <div className="price">14 999сом</div>
              <button className="but-buy">click me</button>
            </div>
          </div>
          <div className="section-block-3-right">
            <div className="title_right-3">
              <h4>Торговое название: </h4>
              <p> SOFOKAST (Производства Натко Фарма)</p>
            </div>
            <div className="title_right-3">
              <h4>Лекарственная форма:</h4>
              <p>таблетки, покрытые пленочной оболочкой</p>
            </div>
            <div className="title_right-3">
              <h4>Описание:</h4>
              <p>
                Капсуло-образные таблетки, покрытые пленочной оболочкой
                кирпичного цвета, с гравировкой "400" на одной стороне и гладкие
                на другой.
              </p>
            </div>
            <div className="title_right-3">
              <h4>Фармакотерапевтическая группа:</h4>
              <p> противовирусное средство</p>
            </div>
            <div className="title_right-3">
              <h4>Код АТХ:</h4>
              <p> J05AX15</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Katalog;
