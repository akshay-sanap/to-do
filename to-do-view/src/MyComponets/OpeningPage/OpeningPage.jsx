import React, { useEffect, useState } from "react";
import "./OpeningPage.css";
import { useNavigate } from "react-router-dom";

const OpeningPage = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      setQuote("The most Effective way To do it is TO DO IT!!");
      setAuthor("My-To-Do");
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <h1 className="fw-bold display-3 text-primary">
          Welcome To the World of To-Dos
        </h1>
        <hr />
        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary fw-bold"
            onClick={() => navigate("/login")}
          >
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
      </div>

      <div
        className="gradient-bg text-white px-5 py-5 rounded shadow d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "500px",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="text-center" style={{ maxWidth: "900px" }}>
          <h2
            className="fst-italic fw-bold mb-4"
            style={{ fontSize: "2.5rem" }}
          >
            "{quote}"
          </h2>
          <p className="fw-semibold fs-4">— {author}</p>
          <img
            src="/images/zen.png"
            alt="Zen Meditation"
            className="img-fluid"
            style={{
              maxHeight: "150px",
              objectFit: "contain",
              borderRadius: "50%",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OpeningPage;
