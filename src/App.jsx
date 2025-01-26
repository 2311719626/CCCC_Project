import React from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./components/start/NavigationBar";
import MainContent from "./components/start/MainContent";
import  start from "C:/Users/姚国巍/mountain_water/src/components/start/start.jsx";
function App() {
  return (<div>
    <NavigationBar />
   <Route path='/start' component={start}/>
  </div>
  );
}

export default App;
