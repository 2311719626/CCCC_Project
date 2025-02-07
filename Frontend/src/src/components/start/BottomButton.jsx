// 用于显示底部按钮
import React from "react";
import "./BottomButton.css";

import {Link} from "react-router-dom";

const BottomButton = () => {
  // 按钮上展示的文本
  const text = ">>> 开始旅程";
  return <Link  to='/wiki'><button className="bottom-button">{text}</button></Link>;
};

export default BottomButton;
