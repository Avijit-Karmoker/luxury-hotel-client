import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';

const Address = () => {
    let { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [billingData, setBillingData] = useState(null);
    const history = useHistory();

    const name = loggedInUser.displayName;
    const email = loggedInUser.email;
    const image = loggedInUser.photoURL;

    const onSubmit = (data) => {
        setBillingData(data);
    };

    const handlePaymentSuccess = (paymentId, paymentCard) => {
        const bookingDetails = {
            name: name,
            email: email,
            image: image,
            selectedRoom: id,
            billingAddress: billingData,
            bookingTime: new Date(),
            paymentId,
            paymentCard
        };

        fetch('https://nameless-ravine-04813.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingDetails),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully');
                    history.push('/review');
                }
            })
    }

    return (
        <div className="address-form">
            <div style={{display: billingData ? 'none' : 'block'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="" className="fw-bold">Name</label>
                    <input {...register("Name")} className="form-control mb-3" placeholder="Name" />
                    <label htmlFor="" className="fw-bold">Email</label>
                    <input {...register("Email")} className="form-control mb-3" placeholder="Email" />
                    <label htmlFor="" className="fw-bold">Address</label>
                    <input {...register("Address")} className="form-control mb-3" placeholder="Address" />
                    <label htmlFor="" className="fw-bold">Phone No</label>
                    <input {...register("Phone")} className="form-control mb-3" placeholder="Phone" />
                    <input type="submit" value="Save" className="btn text-white bg-brand" />
                </form>
            </div>
            <div style={{display: billingData ? 'block' : 'none'}}>
                <h1 className="mb-5 mt-5 payment-text">Select Your Payment</h1>
                <Payment handlePayment={handlePaymentSuccess}></Payment>
            </div>
        </div>
    );
};

export default Address;