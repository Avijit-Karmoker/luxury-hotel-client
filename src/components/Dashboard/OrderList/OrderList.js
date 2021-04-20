import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [bookList, setBookList] = useState();

  useEffect(() => {
    fetch('https://nameless-ravine-04813.herokuapp.com/bookings')
      .then((response) => response.json())
      .then(data => setBookList(data))
  }, [])
  return (
    <div className="col-md-10 ms-auto p-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Phone No</th>
            <th scope="col">Pay With</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            bookList?.map((bl => 
              <tr>
                <td>{bl.billingAddress.Name}</td>
                <td>{bl.billingAddress.Email}</td>
                <td>{bl.billingAddress.Phone}</td>
                <td>{bl.paymentCard.brand}</td>
                {bl.paymentId && <td><button className="btn btn-success">Paid</button></td>}
              </tr>))
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
