import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="mb-1">📝 My To-Do App</p>
        <small>
          Built with 💻 React & Bootstrap | &copy; {new Date().getFullYear()}{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
