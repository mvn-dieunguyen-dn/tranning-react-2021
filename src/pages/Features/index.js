import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const About = lazy(() => import('./About'));


function Feature(props) {
  return (
    <main className="page-main">
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Suspense>
    </main>
  );
}

export default Feature;