import React, { useState } from 'react';
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="bg-secondary">
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
       <div className="card">
          <div className="card-body">
          <h5>capitalist sourcing and logistics</h5><br></br><br></br>
          
              <h1 className="card-title text-center">Login to capitalist sl</h1>
              <label htmlFor="username" className="form-label">
              Please enter your login detail to sign in
            </label>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                 
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='your-email.com'
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='..............................'
                  />
                </div>
                <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>
      <label class="form-check-label" for="exampleCheckbox"> 
      keep me logged in
      </label>
    </div>
    
                <div className="d-grid">
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button><br></br>
                  <p style={{paddingTop:"30px"}}>Need An account ?</p>
                  <a href="/signup" style={{fontSize:"15px",color:"blue"}}>SignUp</a>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;

