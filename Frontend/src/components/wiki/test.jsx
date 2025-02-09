import React, { Component } from 'react'
import Detail from './Detail/index'
import { Link , Route } from 'react-router-dom'
export default class index extends Component {
    state = {
        messageArr: [
            {id:'01',title:'111'},
            {id:'02',title:'121'},
            {id:'03',title:'131'},
        ]
    }
  render() {
    const {messageArr} = this.state
    return (
        <div>
        <ul>
            {
                messageArr.map((msgObj)=> {
                    return (
                    <li key={msgObj.id}>
                        <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                    </li>
                        //第一步
                    )
                })
            }
        </ul>
        <hr />
            <Route path='/home/message/detail/:id/:title' component={Detail}>
   
            </Route>
      </div>
    )
  }
}

//第三步 在其他路由组件中接受参数
    const {id,title} = this.props.match.params
