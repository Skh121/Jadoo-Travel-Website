import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer,Slide  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from "../../../assets/images/tourLogin.png";
import Logo from "../../../assets/images/Logo.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });
  
      const { accessToken, userId, roles } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("userId", userId);
      localStorage.setItem("roles", JSON.stringify(roles));
  
      console.log("Token set in localStorage:", localStorage.getItem("token"));
      console.log("UserId set in localStorage:", localStorage.getItem("userId"));
  
      const role = roles.includes("ADMIN") ? "/admin/dashboard" : "/home";
      toast.success('Logged In Successfully!', {
        position: 'top-right',
        autoClose: 3000,
        onClose: () => {
          navigate(role);
          window.location.reload();
        }
      });
      
    } catch (error) {
      console.error("Login error:", error);
      toast.error(`Invalid credentials. Please try again.`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(`Passwords do not match. Please try again.`, {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register/user", {
        username: username,
        password: password,
        confirm_password: confirmPassword,
      });

      if (response.status === 200) {
         toast.success(`Registration Successfull.`, {
          position: 'top-right',
          autoClose: 3000,
        });
        setIsSignUp(false);
      } else {
        toast.error(`Registration Failed, Please try again`, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(`Registration Failed, Please try again`, {
        position: 'top-right',
        autoClose: 3000,
      });    }
  };
  

  return (
    <>
      <ToastContainer transition={Slide} />
      <div className="container container-login">
        <div className="form-wrapper form-login">
          <div
            className="image-side"
            style={{
              backgroundImage: `url(${loginImage})`,
            }}
          ></div>
          <div className="form-side">
            <div className="form-side-image">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="form-title">
              {isSignUp ? "Create your account" : "Welcome back!"}
            </p>
            <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
              <div className="input-group">
                <label className="label">UserName</label>
                <input
                  className="input"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <div className="label-group">
                  <label className="label">Password</label>
                  {!isSignUp && (
                    <a href="#" className="forgot-password">
                      Forget Password?
                    </a>
                  )}
                </div>
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {isSignUp && (
                <div className="input-group">
                  <label className="label">Confirm Password</label>
                  <input
                    className="input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="button-group">
                <button className="submit-button">
                  {isSignUp ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>
            {!isSignUp && (
              <div className="switch-group">
                <span className="divider"></span>
                <div className="switch-group-signup">
                  <span className="or-text">New to Jadoo?</span>
                  <p className="switch-button" onClick={() => setIsSignUp(true)}>
                    Sign Up
                  </p>
                </div>
                <span className="divider"></span>
              </div>
            )}
            {isSignUp && (
              <div className="switch-group center-content">
                <span className="divider"></span>
                <div className="switch-group-signup">
                  <span className="or-text signup-page ">Already have an account?</span>
                  <p className="switch-button" onClick={() => setIsSignUp(false)}>
                    Login
                  </p>
                </div>
                <span className="divider"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
