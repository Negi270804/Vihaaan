import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("Kavi");
  const [lastName, setLastName] = useState("Sharma");
  const [email, setEmail] = useState("Kavi@gmail.com");
  const [password, setPassword] = useState("kavi@123");

  const handleForm = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="login-logo">
          <span className="logo-text">LearnScope</span>
          <span className="logo-slogan">"Empower your teaching with live student insights."</span>
        </div>
      </div>

      <div className="login-right">
        <div className="login-title">{!isLogin ? "SIGN-UP" : "LOGIN"}</div>
        <div className="login-form-wrapper">
          <form onSubmit={handleForm} className="login-form">
            {!isLogin && (
              <>
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </>
            )}

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>

          <div className="login-switch">
            <div>{!isLogin ? "Already have an account?" : "Don't have an account?"}</div>
            <button onClick={() => setIsLogin(!isLogin)} className="switch-btn">
              Continue to {!isLogin ? "Login" : "Signup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
