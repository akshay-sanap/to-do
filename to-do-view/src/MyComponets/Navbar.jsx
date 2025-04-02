import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav class="d-flex justify-content-lg-around navbar mb-5 text-bg-dark">
        <a class="navbar-brand text-white">
          <FontAwesomeIcon icon={faListCheck} style={{ color: "#FFD43B" }} />
          To-Do
        </a>
        <form class="d-flex" role="search">
          <input
            class="me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-info me-3 pe-3" type="submit">
            Search
          </button>
          <button type="button" class="btn btn-outline-info me-3">
            Log-in
          </button>
          <button type="button" class="btn btn-outline-info ">
            Sign-in
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
