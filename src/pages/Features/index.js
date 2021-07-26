import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About';
import Home from './Home/index'
import Product from './Product';

function Feature(props) {
  return (
    <main className="page-main">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </main>
  );
}

export default Feature;