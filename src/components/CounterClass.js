import React, { Component } from 'react';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleCounter = (value) => {
    this.setState({count: value});
  }

  render() {
    return (
      <div>
        <p>Le compteur est  à : {this.state.count}</p>
        <button  onClick={() =>  this.handleCounter(this.state.count + 1)}>
          +1
        </button>
        <button  onClick={() =>  this.handleCounter(this.state.count - 1)}>
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
