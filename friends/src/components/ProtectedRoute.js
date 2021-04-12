import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// have to mimic route component
// see if theres an auth token — no auth(null) => redirect to '/login'
// render component if token is not null

const ProtectedRoute = ({component: Component, ...theRest })=>{
  return <Route {...theRest} render={()=>{
    if(localStorage.getItem('token') === null) {
      return <Redirect to='/login' />
    }
    return <Component />
  }} />
}

export default ProtectedRoute;