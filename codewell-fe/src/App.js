import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';

import './App.css';
import Auth from './Permissions/Auth.js';
import AddCode from './Code/Add.js';
import Login from './User/Login';
import LoggedInRoute from './Permissions/LoggedInRoute.js';
import Navbar from './UI/Navbar.js';
import Register from './User/Register';

function App() {
  const { t } = useTranslation();
  const { Header, Content, Footer } = Layout;
  const [userData, setUserData] = useState({});

  function onLoginSuccess(id) {
    setUserData({ id: id });
  }

  return (
    <Layout className="layout">
      <Navbar userData={userData} />
      <Content>
        <nav>
          <ul>
            <li>
              <Link to="/">{t('welcome')}</Link>
            </li>
            <li>
              <Link to="/about">{t('About')}</Link>
            </li>
            <li>
              <Link to="/register">{t('Register')}</Link>
            </li>
            <li>
              <Link to="/login">{t('Log in')}</Link>
            </li>
            <li>
              <Link to="/create-code">{t('Add code')}</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/login">
            <Login onLoginSuccess={onLoginSuccess}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <LoggedInRoute userData={userData} path="/create-code">
            <AddCode />
          </LoggedInRoute>
        </Switch>
      </Content>
    </Layout>
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

export { App };

export default App;
