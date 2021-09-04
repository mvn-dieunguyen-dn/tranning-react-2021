import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router';

const Home = lazy(() => import('./Home'));


function Feature(props) {
  return (
    <main className="page-main">
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/">
          <Home />
        </Route>
      </Suspense>
    </main>
  );
}

export default Feature;