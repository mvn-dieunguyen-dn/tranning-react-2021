// import logo from './logo.svg';
// import Circle from './Circle.js';
// import List from './List.js';
import FormHooks from './FormHooks';
import './Main.css';
import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   page: 'home'
    // };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  render() {
    // const { page }  = this.state;
    return (
      <main className="main">
        <div className="container">
          <div className="main-page">
            {/* <List /> */}
            <FormHooks />
            {/* <button className="btn-page" onClick={() => this.handleChangePage('home')}>Home</button>
            <button className="btn-page" onClick={() => this.handleChangePage('about')}>About</button>
            {(page === 'home') &&
            <div className="circles">
              <Circle number="5" width="50" height="50" bg="yellow" />
              <Circle number="10" width="50" height="50" bg="red" />
              <Circle number="15" width="50" height="50" bg="green" />
            </div>}
            {(page === 'about') &&
            <div className="abouts">About page</div>} */}
          </div>
        </div>
      </main>
    );
  }
}
export default Main;
