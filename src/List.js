import React, { Component } from 'react';
import './List.css';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, title: 'title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 1'},
        {id: 2, title: 'title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 2'},
        {id: 3, title: 'title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 3'},
      ],
    }
  }

  handleClick(index) {
    const { items } = this.state;
    this.setState({
      items: [
        ...items.filter((item, i) => i !== index),
      ]
    })
  }
  render() {
    const items = this.state.items
    return (
      <div className="page-list">
        { items.length === 0 && <h3>No content here</h3> }
        { this.state.items.map((item, index) =>
          <div className="item-main">
            <p className="text-uppercase">{ item.title }</p>
            <p>{ item.content }</p>
            <button className="btn-item" onClick={ () => { this.handleClick(index) } }>x</button>
          </div>
          )
        }
      </div>
    )
  }
}
export default Circle;
