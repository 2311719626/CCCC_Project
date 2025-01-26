// 用于显示底部按钮
import React from "react";
import "./BottomButton.css";

const BottomButton = () => {
  // 按钮上展示的文本
  const text = ">>> 开始旅程";
  return <button className="bottom-button">{text}</button>;
};

export default BottomButton;
