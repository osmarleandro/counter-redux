import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment, decrement, incrementAmount, reload, sayMyName } from "../redux/index"

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button class="btn" onClick={() => this.props.decrement()}>-</button>
        <button class="btn" onClick={() => this.props.increment()}>+</button>

        <button class="btn" onClick={() => this.props.reload()}>reload</button>
        <button class="btn" onClick={() => this.props.incrementAmount(10)}>+10</button>
        
        <h1>Hello, {this.props.name}</h1>
        <button class="btn" onClick={() => this.props.sayMyName("Olds")}>Say My Name</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  name: state.name
});

const mapDispatchToProps = {
  increment, decrement, incrementAmount, reload, sayMyName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);