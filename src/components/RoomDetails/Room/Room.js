import React from 'react';
import { useHistory } from 'react-router';
import './Room.css';

const Room = ({room}) => {
    const {roomName, roomType, roomDetails, imageURL, rent, _id} = room;
    const history = useHistory();

    const handleBooking = () => {
        history.push(`/orderDetails/${_id}`);
    }

    return (
        <div className="col-md-4">
            <div className="room-card text-center mb-5 shadow p-3">
                <img src={imageURL} alt=""/>
                <h2 className="text-uppercase text-brand m-3">{roomName}</h2>
                <h5>Room Type: <span className="text-span">{roomType}</span></h5>
                <p className="fs-6 text-secondary">{roomDetails}</p>
                <p className="fw-bold">${rent} per day</p>
                <button onClick={handleBooking} className="btn bg-brand">Book</button>
            </div>
        </div>
    );
};

export default Room;