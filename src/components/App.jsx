import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import PostItem from './PostItem';
import PostsPage from './PostsPage';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostItem />} />
      </Routes>
    </div>
  );
}
