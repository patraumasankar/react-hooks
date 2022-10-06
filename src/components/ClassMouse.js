import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition = e =>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }
  render() {
    return (
      <div>
        <div>X- {this.state.x}</div>
        <div>Y- {this.state.y}</div>
      </div>
    )
  }
}

export default ClassMouse