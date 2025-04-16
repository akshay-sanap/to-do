import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "./ButtonGroup";
import MyProfile from "./MyProfile";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId");

  return (
    <nav className="d-flex justify-content-around navbar mb-5 text-bg-dark py-3 px-5">
      <button
        className="btn btn-outline-warning fw-bold d-flex align-items-center gap-2 border-0"
        onClick={() => navigate(isLoggedIn ? "/home" : "/")}
      >
        <FontAwesomeIcon icon={faListCheck} size="lg" />
        <span>To-Do</span>
      </button>
      {isLoggedIn ? <ButtonGroup /> : ""}
      <form className="d-flex align-items-center gap-3" role="search">
        {isLoggedIn ? (
          <>
            <div className="d-flex align-items-center gap-2 text-nowrap">
              <MyProfile />
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
