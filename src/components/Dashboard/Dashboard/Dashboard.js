import React from "react";
import SideBar from "../Sidebar/SideBar";
import logo from "../../../images/FiveStarHotel.png";
import OrderList from "../OrderList/OrderList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div  className=" dashboard">
        <div className="containers d-flex align-items-center">
          <div>
            <img style={{ width: "100px" }} src={logo} alt="" />
          </div>
          <div style={{ marginLeft: "10%" }}>
            <h1 className="text-white">Order List</h1>
          </div>
        </div>
      </div>
      <SideBar></SideBar>
      <OrderList></OrderList>
    </div>
  );
};

export default Dashboard;
