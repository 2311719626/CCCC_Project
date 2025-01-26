// 导航栏组件，包含左上角图标、标签选择区域和用户头像图标
import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left-icon">LOGO</div>
      <div className="tag-section">
        <span className="selected-tag">首页</span>
        <span className="available-tag">山水胜览</span>
        <span className="available-tag">山水足迹</span>
        <span className="available-tag">山水故事</span>
        <span className="unavailable-tag">关于我们</span>
      </div>
      <div className="user-avatar"></div>
    </nav>
  );
};

export default NavigationBar;
