import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/tourLogin.png";
import Logo from "../../../assets/images/Logo.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Replace with actual authentication logic (e.g., API call, etc.)
    if (email === "admin@gmail.com" && password === "admin123") {
      // Simulate successful authentication
      // Set isLoggedIn to true in your actual application logic
      localStorage.setItem("isLoggedIn", "true"); // Example: Using localStorage for simplicity

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Replace with actual registration logic (e.g., API call, etc.)
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Simulate successful registration
    // Here you would typically send the registration data to your backend
    alert("Account created successfully!");
    setIsSignUp(false); // Switch back to login view after successful registration
  };

  return (
    <>
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
                <label className="label">Email Address</label>
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="switch-group">
                <span className="divider"></span>
                <div className="switch-group-signup">
                  <span className="or-text">Already have an account?</span>
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
