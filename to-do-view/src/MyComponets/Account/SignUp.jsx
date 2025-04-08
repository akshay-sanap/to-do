import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container d-flex justify-content-center bg-light">
        <div
          className="card p-5 shadow"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          {/* Title Section */}
          <div className="text-center mb-4">
            <h1 className="text-warning fw-bold display-4">TO-DOs</h1>
            <p className="fs-5">Creating Your Account : It's quick and easy.</p>
          </div>
          <div className="row">
            <label className="form-label fw-bold mb-3">Name & Email:</label>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="User Name"
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div id="address">
            <label className="form-label fw-bold mb-3">Address:</label>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  placeholder="Street"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="suite"
                  placeholder="Suite (e.g. Apt 101)"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="City"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="zipcode"
                  placeholder="Zipcode"
                  required
                />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <div className="col-md-3">
                <label className="form-label fw-bold mb-0">Location:</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="latitude"
                  placeholder="Latitude"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="longitude"
                  placeholder="Longitude"
                  required
                />
              </div>
            </div>
          </div>
          <div id="Contact">
            <label className="form-label fw-bold mb-3">Contact Details:</label>
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="url"
                className="form-control"
                name="website"
                placeholder="Website"
                required
              />
            </div>
          </div>
          <div className="row">
            <label className="form-label fw-bold mb-3">Company Details:</label>
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                name="catchPhrase"
                placeholder="catchPhrase of the company"
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                name="bs"
                placeholder="BS of company"
                required
              />
            </div>
          </div>

          <div id="signupFooter" className="mt-4">
            <div className="d-flex  justify-content-between ">
              <a
                role="button"
                className="fw-bold text-decoration-none text-primary p-2"
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer" }}
              >
                Already on To-do?
              </a>
              <button type="button" className="btn btn-success fw-bold mb-3">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
