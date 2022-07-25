import axios from 'axios';
import React, { useState } from 'react';

export default function NewPostForm({ submitHandler1 }) {
  const [input, setInput] = useState({ title: '', body: '' });
  const titleChange = (e) => setInput((prev) => ({ ...prev, title: e.target.value }));
  const bodyChange = (e) => setInput((prev) => ({ ...prev, body: e.target.value }));
  return (
    <form onSubmit={(e) => submitHandler1(e, input)}>
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
      <button type="submit" className="btn btn-primary">Add post</button>
    </form>
  );
}
