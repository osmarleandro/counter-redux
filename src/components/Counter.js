import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment, decrement, incrementAmount, reload, sayMyName } from "../redux/index"

class Counter extends Component {

  state = { inputValue: 'olds' }

  render() {
    const { counter, name } = this.props;
    return (

      <div>
        <h1>{counter}</h1>
        <button class="btn" onClick={() => this.props.decrement()}>-</button>
        <button class="btn" onClick={() => this.props.increment()}>+</button>

        <button class="btn" onClick={() => this.props.reload()}>reload</button>
        <button class="btn" onClick={() => this.props.incrementAmount(10)}>+10</button>

        <h1>Hello, {name}</h1>
        <input type="text" placeholder="Enter your name" onChange={event => this.setState({ inputValue: event.target.value })} />
        <button class="btn" onClick={() => this.props.sayMyName(this.state.inputValue)}>Say My Name</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  name: state.nameReducer.name
});

const mapDispatchToProps = {
  increment, decrement, incrementAmount, reload, sayMyName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);