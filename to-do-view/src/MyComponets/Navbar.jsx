import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="d-flex justify-content-lg-around navbar mb-5 text-bg-dark py-3 px-4">
      <button
        className="btn btn-outline-warning fw-bold d-flex align-items-center gap-2 border-0"
        onClick={() => navigate(isLoggedIn ? "/home" : "/")}
      >
        <FontAwesomeIcon icon={faListCheck} size="lg" />
        <span>To-Do</span>
      </button>

      <form className="d-flex align-items-center gap-3" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
        />

        <button className="btn btn-outline-info me-3 pe-3" type="submit">
          Search
        </button>

        {isLoggedIn ? (
          <>
            <div className="d-flex align-items-center gap-2 text-nowrap">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                className="text-info"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("#")}
              />
              <span className="text-light fw-bold">{userName}</span>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex align-items-center gap-2 text-nowrap">
              <button
                type="button"
                className="btn btn-outline-info btn"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                type="button"
                className="btn btn-outline-info btn"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </div>
          </>
        )}
      </form>
    </nav>
  );
};

export default Navbar;
