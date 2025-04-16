import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <div
      className="btn-group "
      role="group"
      aria-label="Basic outlined example"
    >
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => navigate("/todos")}
      >
        My To-Dos
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => navigate("/posts")}
      >
        My Posts
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => navigate("/albums")}
      >
        My Albums
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => navigate("/users")}
      >
        All Users
      </button>
    </div>
  );
};

export default ButtonGroup;
