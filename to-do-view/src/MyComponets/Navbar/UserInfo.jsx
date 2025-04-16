import React, { useEffect, useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const userId = parseInt(localStorage.getItem("userId"), 10);
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    };

    fetchUser();
  }, []);
  return (
    <>
      {user ? (
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Contact Details
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <em className="text-primary text-decoration-underline">
                    {user.email}
                  </em>
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <span className="text-primary">{user.website}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Company Details
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <p className="text-wrap">
                  <strong>Name:</strong> {user.company.name}
                </p>
                <p className="text-wrap">
                  <strong>Catch Phrase:</strong> {user.company.catchPhrase}
                </p>
                <p className="text-wrap">
                  <strong>BS:</strong> {user.company.bs}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Address
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <p className="text-wrap">
                  <strong>Street:</strong> {user.address.street}
                </p>
                <p className="text-wrap">
                  <strong>suite:</strong> {user.address.suite}
                </p>
                <p className="text-wrap">
                  <strong>City:</strong> {user.address.city}
                </p>
                <p className="text-wrap">
                  <strong>Zipcode:</strong> {user.address.zipcode}
                </p>
                <p className="d-flex">
                  <strong className="me-2">Location:</strong>
                  <span>
                    Latitude: {user.address.geo.lat} <br />
                    Longitude: {user.address.geo.lng}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Not Found"
      )}
    </>
  );
};

export default UserInfo;
