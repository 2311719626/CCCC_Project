// 用于展示主要内容，包括插图和诗歌展示
import React from "react";
import Illustration from "./Illustration";
import PoetryDisplay from "./PoetryDisplay";
import BottomButton from "./BottomButton";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <Illustration />
      <PoetryDisplay />
      <BottomButton />
    </div>
  );
};

export default MainContent;
