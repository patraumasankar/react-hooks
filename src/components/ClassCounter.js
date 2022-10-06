import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        this.setState(prevState =>{
            return {
                count: prevState.count + 1
            }
        })
    }
  render() {
    return (
        <>
        <div>{this.state.count}</div>
        <button onClick={this.increment.bind(this)}>+</button>
        </>
    )
  }
}

export default ClassCounter