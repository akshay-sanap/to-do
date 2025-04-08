import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", emailOrUsername, password);
  };

  return (
    <div className="container d-flex justify-content-center bg-light">
      <div
        className="card p-5 shadow"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        {/* Title Section */}
        <div className="text-center mb-4">
          <h1 className="text-warning fw-bold display-4">TO-DOs</h1>
          <p className="fs-5">Keep the Right Track of your Tasks.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Email address or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-100 fw-bold mb-3">
            Log In
          </button>

          <div className="text-center mb-3">
            <a href="#" className="text-decoration-none">
              Forgotten password?
            </a>
          </div>

          <hr />

          <div className="text-center">
            <button
              type="button"
              className="btn btn-warning fw-bold"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
