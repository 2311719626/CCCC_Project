// 用于展示插画
import React from "react";
import "./Illustration.css";
import myIllustration from "../../assets/background.png";

const Illustration = () => {
  return (
    <div className="illustration">
      <img src={myIllustration} alt="" />
    </div>
  );
};

export default Illustration;
