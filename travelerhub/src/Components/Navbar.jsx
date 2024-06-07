import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={`${process.env.PUBLIC_URL}/logoSpace.png`}
            alt="Logo"
            width={30}
            height={30}
            className="d-inline-block align-top"
          />
          Space Traveler's Hub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Rocket</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"  to='/mission'>Mission</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"  to='/profile'>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
