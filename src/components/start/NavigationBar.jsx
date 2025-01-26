// 导航栏组件，包含左上角图标、标签选择区域和用户头像图标
import React from "react";
import "./NavigationBar.css";
import { Route,Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left-icon">LOGO</div>
      <div className="tag-section">
        <Link to='/start'><span className="selected-tag">首页</span></Link>
        <Link><span className="available-tag">山水胜览</span></Link>
        <Link><span className="available-tag">山水足迹</span></Link>
        <Link><span className="available-tag">山水故事</span></Link>
        <Link><span className="unavailable-tag">关于我们</span></Link>
      </div>
      <div className="user-avatar"></div>
    </nav>
  );
};

export default NavigationBar;
