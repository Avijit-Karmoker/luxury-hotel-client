import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const Reviews = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    
        fetch('https://nameless-ravine-04813.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Thank you for your review');
                }
            })
    };

    return (
        <div>
            <div className="w-50 m-auto">
                <h1 className="text-success">Give Your Review Please!!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Name</label>
                    <input {...register("name")} className="form-control mb-3" placeholder="Name" />
                    <label htmlFor="">Address</label>
                    <input {...register("address")} className="form-control mb-3" placeholder="Address" />
                    <label htmlFor="">Write here about our service</label> <br/>
                    <textarea {...register("sms")} className="form-control" cols="100" rows="10"></textarea> <br/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;