import React from "react";
import "./css/Card.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const Card = () => {
  return (
    <div className="Card">
      <div className="event">
        <img src={image1} alt="1"></img>
        <h3>
          金沢城・兼六園四季物語～冬の段～
          <br />
          （金沢城・兼六園ライトアップ）
        </h3>
        <p>
          2024年2月3日（土）10日（土）11日（日）
          <br />
          17日（土）
        </p>
        <button>口コミ</button>
      </div>
      <div className="event">
        <img src={image2} alt="2"></img>
        <h3>
          金沢港クルーズターミナル
          <br />
          ベイサイドクリスマスイルミネーション
        </h3>
        <p>2022年12月6日(火)～</p>
        <button>口コミ</button>
      </div>
      <div className="event">
        <img src={image3} alt="3"></img>
        <h3>
          金沢芸妓のほんものの芸にふれる旅 <br />
          2023-24
        </h3>
        <p>
          2023年4月22日(土)～2024年3月30日(土)
          <br />
          ※期間中の指定土曜日　公式サイトをご覧ください。
        </p>
        <button>口コミ</button>
      </div>
      <div className="event">
        <img src={image4} alt="4"></img>
        <h3>
          金沢城・兼六園四季物語～秋の段～
          <br />
          （金沢城・兼六園ライトアップ）
        </h3>
        <p>
          2023年9月30日(土)、10月7日(土)・8日(日)・
          <br />
          14日(土)・21日(土)
        </p>
        <button>口コミ</button>
      </div>
      <div className="event">
        <img src={image5} alt="5"></img>
        <h3>金沢城・兼六園四季物語（観桜期）2023</h3>
        <p>2023年3月27日(月)～4月2日(日)</p>
        <button>口コミ</button>
      </div>
      <div className="event">
        <img src={image6} alt="6"></img>
        <h3>近江町市場 カニまつり</h3>
        <p>2023年11月11日（土）</p>
        <button>口コミ</button>
      </div>
    </div>
  );
};

export default Card;
