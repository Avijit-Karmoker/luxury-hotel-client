import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Address from '../Address/Address';
import Payment from '../Payment/Payment';

const OrderDetails = () => {
    let { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/orderDetails/${id}`)
            .then(response => response.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div>
            <div className="row containers mt-5">
                {
                    book?.map(bk =>
                        <div className="col-md-6">
                            <div className="room-card text-center mb-5 shadow p-3">
                                <h1 className="text-uppercase text-color">Your Selected Room</h1>
                                <img src={bk.imageURL} alt="" />
                                <h3 className="text-uppercase text-brand m-3">{bk.roomName}</h3>
                                <h6>Room Type: <span className="text-span">{bk.roomType}</span></h6>
                                <p className="fw-bold">Rent: <span className="text-danger">${bk.rent}</span> per day</p>
                            </div>
                        </div>)
                }
                <div className="col-md-6">
                    <h1 className="text-uppercase text-brand mb-5">Customer's Address</h1>
                    <Address></Address>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;