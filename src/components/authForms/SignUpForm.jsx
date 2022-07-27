import axios from 'axios';
import React, { useState } from 'react';

export default function SignUpForm({ setAuthUser }) {
  const [input, setInput] = useState({ username: '', password: '', repeat: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.password !== '' && input.username !== '' && input.repeat === input.password) {
      axios.post('/api/v1/users', input)
        .then((res) => setAuthUser(res.data));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input
          value={input.username}
          onChange={changeHandler}
          type="text"
          name="username"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          value={input.password}
          onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Repeat password</label>
        <input
          value={input.repeat}
          onChange={changeHandler}
          type="password"
          name="repeat"
          className="form-control"
          id="exampleInputPassword2"
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}
