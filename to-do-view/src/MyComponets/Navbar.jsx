import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="d-flex justify-content-lg-around navbar mb-5 text-bg-dark">
      <button
        className="btn btn-outline-warning fw-bold d-flex align-items-center gap-2 border-0"
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faListCheck} size="lg" />
        <span>To-Do</span>
      </button>
      <form className="d-flex" role="search">
        <input className="me-2" type="search" placeholder="Search" />
        <button className="btn btn-outline-info me-3 pe-3" type="submit">
          Search
        </button>
        <button
          type="button"
          className="btn btn-outline-info me-3"
          onClick={() => navigate("/login")} // ✅ correct usage
        >
          Log-in
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => navigate("/signup")}
        >
          Sign-Up
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
