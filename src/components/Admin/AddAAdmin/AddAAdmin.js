import React, { useState } from 'react';
import SideBar from '../../Dashboard/Sidebar/SideBar';
import logo from "../../../images/FiveStarHotel.png";

const AddAAdmin = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://nameless-ravine-04813.herokuapp.com/addAAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div>
                <div className=" dashboard">
                    <div className="containers d-flex align-items-center">
                        <div>
                            <img style={{ width: "100px" }} src={logo} alt="" />
                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <h1 className="text-white">Add Admin</h1>
                        </div>
                    </div>
                </div>
                <SideBar></SideBar>
                <div className="col-md-10 ms-auto">
                    <form onSubmit={handleSubmit} className="p-5 bg-secondary m-5 rounded-3">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" onBlur={handleBlur} class="form-control" name="email" placeholder="Your email address" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Your Name" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAAdmin;