import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <button
        className="btn btn-outline-light d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <FontAwesomeIcon
          icon={faUserCircle}
          size="2x"
          className="text-info"
          style={{ cursor: "pointer" }}
        />
        <strong>{userName}</strong>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header flex-column align-items-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile Picture"
            className="img-fluid rounded-circle mb-2 "
            style={{ width: "150px", height: "150px" }}
          />
          <strong className="text-center fs-3">{userName}</strong>

          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="container mt-4">
            <UserInfo />
          </div>
          <div id="logOut" className="d-flex justify-content-center mt-4">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="offcanvas"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
