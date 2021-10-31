import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-mesa-35453.herokuapp.com/getAllOrders")
      .then((res) => res.json())
      .then((data) => setAcceptedOrders(data));
  }, []);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-primary table-hover">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Order ID</th>
              <th scope="col">Product ID</th>
              <th scope="col">Order Date</th>
              <th scope="col">Shipping Status</th>
            </tr>
          </thead>
          <tbody>
            {acceptedOrders.map((order) => (
              <tr key={order._id}>
                <th scope="row">{order.email}</th>
                <td>{order._id}</td>
                <td>{order.order?._id}</td>
                <td>
                  {new Date(order?.order.order_placement_time).toDateString(
                    "dd/MM/yyyy"
                  )}
                </td>
                <td>Pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
