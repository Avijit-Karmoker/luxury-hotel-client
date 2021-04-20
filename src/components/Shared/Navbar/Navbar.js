import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/FiveStarHotel.png";

const Navbar = () => {
  return (
    <section className=" bg-brand ">
      <nav class="navbar navbar-expand-lg navbar-dark containers">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              style={{ height: "50px", marginRight: "10px" }}
              src={logo}
              alt=""
            />
            Five Star Hotel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link text-uppercase active text white" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-uppercase" to="/rooms">
                  Rooms
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-uppercase" to="/amenities">
                  Amenities
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-uppercase" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-uppercase" to="/about">
                  About US
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-uppercase" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
