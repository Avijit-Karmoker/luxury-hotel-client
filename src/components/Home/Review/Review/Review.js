import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Review.css";
import img from '../../../../images/man.png';

const Review = () => {
  const [customerReview, setCustomerReview] = useState([]);

  useEffect(() => {
    fetch('https://nameless-ravine-04813.herokuapp.com/reviews')
      .then(response => response.json())
      .then(data => setCustomerReview(data))
  }, []);

  return (
    <div className="row containers">
      {
        customerReview.map(item => 
          <div className="col-md-4">
            <div className="review-cart shadow rounded-3">
              <div>
                <div>
                  <p className="mb-5">{item.sms}</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className=" rounded-circle shadow me-3" style={{ width: "100px" }} src={img} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <h5>{item.address}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Review;
