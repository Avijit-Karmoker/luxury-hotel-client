import React from "react";
import DoubleRoom from "../DoubleRoom/DoubleRoom";
import SingleRoom from "../SingleRoom/SingleRoom";
import "./FeaturedRoom.css";

const FeaturedRoom = () => {
  return (
    <section>
      <SingleRoom></SingleRoom>
      <DoubleRoom></DoubleRoom>
    </section>
  );
};

export default FeaturedRoom;
