import React from "react";
import CopyRight from "../CopyRight/CopyRight";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footers">
      <div className="containers">
        <div className="row containers footer">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p className="text-secondary">
              A hotel is an establishment that provides paid loading on a
              short-term basis. Facilities Provided may range from
              modest-quality. A hotel is an establishment that provides paid
              loading on a short-term basis. Facilities Provided may range from
              modest-quality.
            </p>
            <button className="btn bg-brand">Read More</button>
          </div>
          <div className="col-md-2">
            <h4>Navigation</h4>
            <p className="text-uppercase">Home</p>
            <p className="text-uppercase">Rooms</p>
            <p>Amenities</p>
            <p>Gallery</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className="col-md-6">
            <div>
              <div>
                <h4>Address</h4>
                <p>
                  273 South Riverview Rd. <br /> New York, NY 10011
                </p>
              </div>
              <div>
                <h4>Telephone</h4>
                <p>+1 234 5678 910
                <br/>+2 233 4455 667</p>
              </div>
            </div>
            <div>
              <h4>Join our newsletter</h4>
              <p>Be the first to know our latest updates and news!</p>
              <div className="d-flex">
                <input
                  className="form-control p-3 me-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-brand text-white rounded-3 p-3">
                  Subscribe!
                </button>
              </div>
            </div>
          </div>
          <CopyRight></CopyRight>
        </div>
      </div>
    </section>
  );
};

export default Footer;
