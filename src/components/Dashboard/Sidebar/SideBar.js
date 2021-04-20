import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { UserContext } from "../../../App";
import order from "../../../images/note.png";
import addService from "../../../images/settings.png";
import admin from "../../../images/administrator.png";
import service from "../../../images/management-service.png";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/admins')
      .then(response => response.json())
      .then(data => setIsAdmin(data[0]))
  }, [])

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 me-5"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white text-decoration-none">
            <img style={{ width: '20px' }} src={order} alt="" /> Order-List
          </Link>
        </li>
          <li>
            <Link
              to="/addService"
              className="text-white text-decoration-none"
            >
              <img style={{ width: '20px' }} src={addService} alt="" /> Add Service
                </Link>
          </li>
          <li>
            <Link
              to="/addAAdmin"
              className="text-white text-decoration-none"
            >
              <img style={{ width: '20px' }} src={admin} alt="" /> Make Admin
                </Link>
          </li>
          <li>
            <Link
              to="/manageService"
              className="text-white text-decoration-none"
            >
              <img style={{ width: '20px' }} src={service} alt="" /> Manage Service
                </Link>
          </li>
      </ul>
    </div>
  );
};

export default SideBar;
