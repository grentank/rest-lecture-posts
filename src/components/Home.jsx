import React from 'react';
import LogInForm from './authForms/LogInForm';
import SignUpForm from './authForms/SignUpForm';

export default function Home({ setAuthUser, authUser }) {
  return (
    <>
      {' '}
      {authUser ? `Hello, ${authUser.username}`
        : (
          <>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Log in</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sign up</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <LogInForm />
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <SignUpForm setAuthUser={setAuthUser} />
              </div>
            </div>
          </>
        )}
    </>
  );
}
