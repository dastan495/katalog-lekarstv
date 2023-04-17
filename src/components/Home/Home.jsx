import React from "react";
import "./Home.css";
import tabletka1 from "../../image/image1.png";
import tabletka2 from "../../image/image1.png";
import Accardion from "./Accardion";
import { prodArr } from "../../consts";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="section1">
        <div className="left">
          <h1>Вылечи гепатит с помощью препаратов Софобувир</h1>
          <p>
            Опасность гепатита С заключается в том, что при отсутствии терапии
            болезнь в конце концов приводит к развитию опасных осложнений
          </p>
          <button className="buy">Купить</button>
        </div>
        <div className="right">
          <div className="okrug">
            <img src={tabletka1} alt="" />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section2-box">
          <div className="title-box-2">
            <div className="title-left-2">
              <h1>Про лекарство</h1>
            </div>
            <div className="title-right-3">
              <h3>
                Софосбувир - препарат для лечения гепатита С, представляет собой
                ингибитор вирусной полимеразы и используется для комплексного
                (совместно с другими препаратами) лечения хронического гепатита
                С 1, 2, 3 и 4 генотипа.
              </h3>
            </div>
          </div>
          <div className="title-box-clone-2">
            <div className="title-left-clone-2">
              <h3>Рекомандации</h3>
            </div>
            <div className="titile-left-clone-2">
              <p>
                При тяжелых нарушениях функции почек и при совместном
                инфицировании гепатит С/ВИЧ в дозировку и схему лечения
                необходимо вносить коррективы в соответствии с рекомендациями
                клинического фармаколога. Софосбувир применяется комплексно в
                сочетании с другими препаратами. Если их прием по какой-то
                причине прекращен, то и прием Софосбувира также должен быть
                прекращен.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <h1>Каталог</h1>
        <div className="section-block-3-left">
          <div className="main-3">
            <div className="imaage_left_3">
              <img src={tabletka1} alt="" />
            </div>
            <div className="asdd">
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
              <button onClick={() => navigate("/katalog")} className="but-buy">
                Больше
              </button>
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
      </div>
      <div className="section4">
        <div>
          <h1>Вопросы</h1>
        </div>
        <Accardion />
      </div>
      <div className="section5">
        <div className="section2-box">
          <div className="title-box-2">
            <div className="title-left-2">
              <h1>Противопокозания</h1>
            </div>
            <div className="title-right-3">
              <h3 style={{ width: "100%", fontSize: "22px" }}>
                Противопоказано беременным, кормящим матерям, детям, а так же
                планирующим беременность.
              </h3>
            </div>
          </div>
          <div className="title-box-clone-2">
            <div className="title-left-clone-2">
              <h3>Побочные реакции</h3>
            </div>
            <div className="titile-left-clone-2">
              <p>
                Наиболее часто встречающимся побочным действии при
                комбинированной терапии Софосбувиром и Рибавирином (20%)
                является слабость и головная боль. При лечении с использованием
                Софосбувира и средств, применяемых вместе с ним, могут меняться
                некоторые гематологические параметры, в том числе: повышение
                билирубина, креатинкиназы (креатинфосфокиназы), липазы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
