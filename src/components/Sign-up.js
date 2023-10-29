import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
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
          
              <h1 className="card-title text-center">Signup to capitalist sl</h1>
              <label htmlFor="username" className="form-label">
              Createyour your account in seconds
            </label>
              <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                 
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Full name'
                  />
                </div>
                <div className="mb-3">
                 
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='your-email@gmail.com'
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter a password'
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Confirm your password'
                  />
                </div>
                <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>
      <label class="form-check-label" for="exampleCheckbox"> 
      I aggre to the <a href="">Terms of Service and Privacy Policy</a> 
      </label>
    </div>
    <div className="d-grid">
                  <button type="submit" class="btn btn-primary btn-block">
                    Create an account
                  </button><br></br>
                  <h6>Already have an account? <a href="">login</a> </h6>
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

export default Signup;