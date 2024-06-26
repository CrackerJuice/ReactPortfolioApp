import React from "react";

const Navbar = () => {
  return (
    <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
      <a ClassName="navbar-brand" href="#">
        Navbar
      </a>
      <button
        ClassName="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span ClassName="navbar-toggler-icon"></span>
      </button>

      <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
        <ul ClassName="navbar-nav mr-auto">
          <li ClassName="nav-item active">
            <a ClassName="nav-link" href="#">
              Home <span ClassName="sr-only">(current)</span>
            </a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
