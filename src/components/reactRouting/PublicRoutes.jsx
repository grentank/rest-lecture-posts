import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';

export default function PublicRoutes({ authUser, setAuthUser }) {
  return (
    <Routes>
      <Route path="*" element={<Home authUser={authUser} setAuthUser={setAuthUser} />} />
    </Routes>
  );
}
