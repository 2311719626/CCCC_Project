import React, { Component } from 'react'
import "./material.css"
import data from "./landscape.json"

export default class material extends Component {
  render() {
    const {name} =this.props.match.params
const findresult =data.find((obj)=>{
return obj.name===name;

})

    return (
//  <div className="main">
         <div className="all_container">
        <div className="profile">
            <h2>{findresult.name}</h2>
            <p>基本资料</p>
            <p>历史沿革</p>
            <p>特色文旅</p>
            <p>旅游线路</p>
            
        </div>
        <div className="list">
            <h3>基本资料</h3>
            <img src="src\assets\background.png"className='photo'  />
            <p>
                {findresult.basic}
            </p>
            <h3>历史沿革</h3>
            <p>{findresult.history}</p>
             <h3>特色文旅</h3>
             <p></p>
<h3>旅游线路</h3>
        </div>
    </div>
    //   </div>
    )}
}
