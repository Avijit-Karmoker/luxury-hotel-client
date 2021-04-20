import React from "react";
import { useHistory } from "react-router-dom";
import bedRoom1 from "../../../../images/featuresBedRoom1.jpg";
import bedRoom2 from "../../../../images/featuresBedRoom2.jpg";

const SingleRoom = () => {
  const history = useHistory();
  const handleRooms = () => {
    history.push('/rooms');
  }
  return (
    <section className="containers features-room">
      <h1 className="text-center pb-2">Featured Rooms</h1>
      <div className="hr"></div>
      <div className="row">
        <div className="col-md-3">
          <img className="kingBedRoom1" src={bedRoom1} alt="" />
        </div>
        <div className="col-md-4 mt-5" style={{ zIndex: "-1" }}>
          <img className="kingBedRoom2 pt-5" src={bedRoom2} alt="" />
        </div>
        <div className="col-md-4 ms-5 features-room-text">
          <h1 className="mb-5 king">
            Single <br /> Bedroom
          </h1>
          <p className="text-secondary fs-5 pe-5 me-5 pb-3">
            A hotel mis an establishment that provides paid lodging on a
            short-term basis. Facilities provided may range from a
            modest-quality mattress in a small room to large suites with bigger.
          </p>
          <button onClick={handleRooms} className="text-uppercase booking-btn">
            See Room details <br /> & <br /> book
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleRoom;
