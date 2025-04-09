import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.username.toLowerCase() === emailOrUsername.toLowerCase() ||
        user.email.toLowerCase() === emailOrUsername.toLowerCase()
    );

    if (foundUser) {
      // Simulate password check — JSONPlaceholder doesn't have passwords
      if (password === "pass@123") {
        localStorage.setItem("userId", foundUser.id);
        localStorage.setItem("userName", foundUser.name);
        navigate("/home");
      } else {
        alert("Incorrect password. Use 'password' for demo.");
      }
    } else {
      alert("User not found. Try a valid username or email.");
    }
  };

  return (
    <div className="container d-flex justify-content-center bg-light">
      <div
        className="card p-5 shadow"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <div className="text-center mb-4">
          <h1 className="text-warning fw-bold display-4">TO-DOs</h1>
          <p className="fs-5">Keep the Right Track of your Tasks.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Email address or Username"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label for="floatingPassword">Password</label>
          </div>

          <hr />

          <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-primary fw-bold">
              Log In
            </button>
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
