import React, { useEffect, useState } from 'react';
import Headers from '../../Home/Headers/Headers';
import Navbar from '../../Shared/Navbar/Navbar';
import Room from '../Room/Room';

const AllRoom = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ravine-04813.herokuapp.com/rooms')
        .then((response) => response.json())
        .then(data => setRooms(data))
    }, []);
    
    return (
        <div>
            <Navbar></Navbar>
            <Headers></Headers>
            <h1 className="text-brand text-center mt-5 pt-5">Choose Your Room</h1>
            <div className="row containers">
                {
                    rooms.map(room => <Room room={room} key={room._id}></Room>)
                }
            </div>
        </div>
    );
};

export default AllRoom;