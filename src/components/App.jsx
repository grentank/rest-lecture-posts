import axios from 'axios';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import PostItem from './PostItem';
import PostsPage from './PostsPage';
import PrivateRoutes from './reactRouting/PrivateRoutes';
import PublicRoutes from './reactRouting/PublicRoutes';

export default function App({ usernameSession }) {
  const [authUser, setAuthUser] = useState(usernameSession); // authUser -> object -> {username: ...}
  const logoutHandler = () => {
    setAuthUser({}); // Чиним logout -> setAuthUser({})
    axios.get('/api/v1/logout').then(() => {});
  };
  return (
    <div className="container">
      <NavBar logoutHandler={logoutHandler} />
      {' '}
      {/* Раньше был Routing един для всех, тепер он разбит на два, в заисимости от авторизации */}
      {authUser.username ? <PrivateRoutes authUser={authUser} setAuthUser={setAuthUser} /> // authUser -> object, authUser.username
        : <PublicRoutes authUser={authUser} setAuthUser={setAuthUser} /> }
    </div>
  );
}
