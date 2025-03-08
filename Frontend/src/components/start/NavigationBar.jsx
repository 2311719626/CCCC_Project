// 导航栏组件，包含左上角图标、标签选择区域和用户头像图标
import React from "react";
import "./NavigationBar.css";
import { Route,Link,NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left-icon">LOGO</div>
      <div className="tag-section">
        <NavLink style={{ textDecoration:'none'}} to='/start' activeClassName="selected-tag" className="available-tag"><span>首页</span></NavLink>
        <NavLink style={{ textDecoration:'none'}} to='/wiki/'  activeClassName="selected-tag" className="available-tag"><span>山水胜览</span></NavLink>
        <NavLink style={{ textDecoration:'none'}} to='/zuji' activeClassName="selected-tag" className="available-tag"><span>山水足迹</span></NavLink>
        {/* <Link style={{ textDecoration:'none'}} className="available-tag"><span>山水故事</span></Link> */}
        <Link style={{ textDecoration: 'none'}} className="available-tag"><span>关于我们</span></Link>
      </div>
      <div className="user-avatar"></div>
    </nav>
  );
};

export default NavigationBar;
