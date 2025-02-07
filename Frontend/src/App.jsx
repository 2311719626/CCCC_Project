import React from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./components/start/NavigationBar";
import MainContent from "./components/start/MainContent";
import wiki from "./components/wiki/wiki.jsx"
// import "./components/wiki/wiki.css"
import  start from "./components/start/start.jsx";

function App() {
  return (<div>
    <NavigationBar />
   <Route path='/start' component={start}/>
   <Route path='/wiki' component={wiki}/>
      
  </div>
  );
}

export default App;
