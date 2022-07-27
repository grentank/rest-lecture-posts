import React from 'react';

export default function LogInForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input type="text" name="user" className="form-control" id="exampleInputEmaillogin" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name="password" className="form-control" id="exampleInputPasswordlogin" />
      </div>
      <button type="submit" className="btn btn-primary">Log in</button>
    </form>
  );
}
