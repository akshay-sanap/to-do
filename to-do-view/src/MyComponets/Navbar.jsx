import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar p-2 text-bg-dark">
        <div class="container">
          <a class="navbar-brand text-white">To-Do</a>
          <form class="d-flex" role="search">
            <input
              class="me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success " type="submit">
              Search
            </button>
            <button type="button" class="btn btn-outline-info">
              Log-in
            </button>
            <button type="button" class="btn btn-outline-info">
              Sign-in
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
