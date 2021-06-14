import React, { Component } from 'react';
import './Circle.css';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      button: 'STOP',
      width: this.props.width,
    }
    this.startCountDown = this.startCountDown.bind(this);
    this.interval = null;
  }

  startCountDown() {
    this.interval = setInterval(() => {
      if (this.state.number <= 0) {
        this.stopCountDown();
        return
      }
      this.setState({
        number: this.state.number - 1,
      })
    }, 1000)
  }

  componentDidMount() {
    this.startCountDown();
  }

  stopCountDown() {
    clearInterval(this.interval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeState() {
    if (this.state.button === 'STOP') {
      this.stopCountDown()
      this.setState({
        button: 'START'
      })
    } else {
      this.startCountDown()
      this.setState({
        button: 'STOP'
      })
    }
  }

  render() {
    const { number } = this.state;
    const style = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      background: this.props.bg,
    }
    return (
      <div className="page-circle">
        <button className="btn-circle" onClick={ () => { this.changeState() } }>{ this.state.button }</button>
        <div style={ style } className="circle">
          <p className="number-count">{ number }</p>
        </div>
      </div>
    )
  }
}
export default Circle;
