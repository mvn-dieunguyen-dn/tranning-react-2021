import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

function PrivateRoute({children, ...rest}) {
  const auth = useAuth()
  return (
    <Route {...rest} render={() => auth.isLogged ? (children) : (<Redirect to="/auth/login" />)} />
  )
}

export default PrivateRoute;
