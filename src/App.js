import './App.css';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
// import Feature from './pages/Features/index'
// import Account from './pages/Account';
// import Auth from './pages/Auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './core/guard/PrivateRoute';
import React, { Suspense, lazy } from 'react';

const Account = lazy(() => import('./pages/Account'));
const Auth = lazy(() => import('./pages/Auth'));
const Feature = lazy(() => import('./pages/Features/index'));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Feature />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
