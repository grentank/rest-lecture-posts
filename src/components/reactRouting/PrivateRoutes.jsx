import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import PostItem from '../PostItem';
import PostsPage from '../PostsPage';

export default function PrivateRoutes({ authUser, setAuthUser }) {
  return (
    <Routes>
      <Route path="/" element={<Home authUser={authUser} setAuthUser={setAuthUser} />} />
      <Route path="/posts" element={<PostsPage authUser={authUser} />} />
      <Route path="/posts/:id" element={<PostItem />} />
    </Routes>
  );
}
