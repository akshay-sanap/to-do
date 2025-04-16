import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-3">
      <div className="container text-center">
        <p className="mb-1">📝 My To-Do App</p>
        <small>
          Built with 💻 React & Bootstrap | &copy; {new Date().getFullYear()}{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
