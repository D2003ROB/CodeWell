import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import React from 'react';
import './App.css';

import Auth from './Permissions/Auth.js';
import CreateCode from './Code/Create.js';
import Login from './User/Login';
import LoggedInRoute from './Permissions/LoggedInRoute.js';
import Register from './User/Register';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{t('welcome')}</Link>
            </li>
            <li>
              <Link to="/about">{t('About')}</Link>
            </li>
            <li>
              <Link to="/users">{t('Users')}</Link>
            </li>
            <li>
              <Link to="/register">{t('Register')}</Link>
            </li>
            <li>
              <Link to="/login">{t('Log in')}</Link>
            </li>
            <li>
              <Link to="/create-code">{t('Create code')}</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login auth={Auth}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <LoggedInRoute auth={Auth} path="/create-code">
            <CreateCode />
          </LoggedInRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h3>Users</h3>;
}

export default App;
