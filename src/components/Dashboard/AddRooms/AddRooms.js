import React, { useState } from "react";
import SideBar from "../Sidebar/SideBar";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddRooms = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "7f04d54971b86eea98084cb12d667875");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const roomData = {
      roomName: data.name,
      roomType: data.type,
      roomDetails: data.details,
      imageURL: imageURL,
      rent: data.rent,
    };

    const url = `https://nameless-ravine-04813.herokuapp.com/addRoom`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomData),
    })
    .then((response) => console.log("server side response", response));
  };
  return (
    <div>
      <SideBar></SideBar>
      <div className="col-md-10 m-auto" style={{ width: "40%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Room name"
            {...register("name")}
            className="form-control p-3"
          />
          <input
            placeholder="Type"
            {...register("type")}
            className="form-control mt-3 p-3"
          />
          <textarea
            placeholder="Details"
            {...register("details")}
            className="form-control mt-3 p-3"
          />
          <input
            placeholder="Room Rent"
            {...register("rent")}
            className="form-control mt-3 p-3"
          />
          <input
            type="file"
            onChange={handleImageUpload}
            className="form-control bg-brand mt-3 p-3"
          />
          <div className="text-end mt-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRooms;
