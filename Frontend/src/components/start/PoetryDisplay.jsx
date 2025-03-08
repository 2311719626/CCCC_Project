// 用于展示诗词的组件
import React from "react";
import "./PoetryDisplay.css";

const PoetryDisplay = () => {
  return (
    <div className="poetry-display">
      <p className="poetry-text">小舟从此逝，江海寄余生。</p>
      <p className="poetry-author">苏轼《临江仙·夜饮东坡醒复醉》</p>
    </div>
  );
};

export default PoetryDisplay;
