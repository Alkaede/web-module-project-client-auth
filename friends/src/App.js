import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  const logout = () => {
    localStorage.removeItem('token');
  }

  return (
    <Router>
      <div className="App">
        <div>
          <nav className='nav-container'>
            <ul className='nav-list'>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
              <li>
                <Link to='/protected'>Protected Page</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Switch>
        <ProtectedRoute exact path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
