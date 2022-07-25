import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PostItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state;
  const [input, setInput] = useState({ title: post.title, body: post.body });
  const titleChange = (e) => setInput((prev) => ({ ...prev, title: e.target.value }));
  const bodyChange = (e) => setInput((prev) => ({ ...prev, body: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    axios.patch(`/api/v1/posts/${post.id}`, input)
      .then(() => navigate('/posts'));
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Post title:</label>
        <input
          value={input.title}
          onChange={titleChange}
          type="text"
          name="title"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Post body:</label>
        <input
          value={input.body}
          onChange={bodyChange}
          type="text"
          name="body"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Edit post</button>
    </form>
  );
}
