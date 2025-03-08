import React, { Component } from 'react'
import { Link , Route } from 'react-router-dom'
import material from './material'

export default class Show extends Component {
  render() {
    return (
      <div>
        <Route path="/show/:name" component={material}  />
      </div>
    )
  }
}
