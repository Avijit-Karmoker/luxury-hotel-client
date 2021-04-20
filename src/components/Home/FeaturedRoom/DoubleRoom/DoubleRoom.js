import React from "react";
import { useHistory } from "react-router";
import doubleBed1 from "../../../../images/doubleBed.jpg";

const DoubleRoom = () => {
  const history = useHistory();
  const handleRooms = () => {
    history.push('/rooms');
  }
  return (
    <div>
      <div className="row containers double-bed">
        <div className="col-md-6 double-text">
          <h1 className="mb-5" style={{fontSize: '65px'}}>
            Queen & <br /> Double <br /> Bedroom
          </h1>
          <p className="text-secondary fs-5 me-5 pb-3">
            A hotel mis an establishment that provides paid lodging on a
            short-term basis. Facilities provided may range from a
            modest-quality mattress in a small room to large suites with bigger.
          </p>
          <button onClick={handleRooms} className="text-uppercase booking-btn">
            See Room details <br /> & <br /> book{" "}
          </button>
        </div>
        <div className="col-md-6">
          <img style={{ marginTop: "18%" }} src={doubleBed1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoubleRoom;
