import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Orders = () => {
  const { user } = useContext(UserContext);
  const [isDisplaySpinner, setIsDisplaySpinner] = useState(true);

  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://enigmatic-mesa-35453.herokuapp.com/getOrderDetails/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setIsDisplaySpinner(false);
      });
  }, [user]);

  const totalCost = allOrders.reduce(
    (total, order) => total + parseInt(order.order.book_price),
    0
  );

  return (
    <div className="container m-auto mt-4">
      <h3>
        {" "}
        Hello <span style={{ color: "goldenrod" }}>{user.name}</span> ,here is
        the details list of your placed order...{" "}
      </h3>
      <p>Click on any Order Id to track your order.</p>
      <div className="table-responsive mt-3 p-4">
        <table className="table table-hover">
          <thead className="table-info">
            <tr>
              <th scope="col">
                <i className="bi bi-arrow-down-circle-fill"></i> Order ID
              </th>
              <th scope="col">
                <i className="bi bi-calendar-check-fill"></i> Placed Time
              </th>
              <th scope="col">
                <i className="bi bi-basket-fill"></i> Product name
              </th>
              <th scope="col">
                <i className="bi bi-tags-fill"></i> Price
              </th>
              <th scope="col">
                <i className="bi bi-handbag-fill"></i> Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {isDisplaySpinner && (
              <tr className="text-center">
                <th scope="row"></th>
                <th
                  scope="row"
                  className="spinner-border text-primary"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </th>

                <th scope="row" colSpan="3"></th>
              </tr>
            )}
            {allOrders.map((order) => (
              <tr key={order._id}>
                <th scope="row">
                  <Link to={`/order-tracking?orderId=${order._id}`}>
                    {order._id}
                  </Link>
                </th>
                <td>
                  {new Date(order?.order.order_placement_time).toDateString(
                    "dd/MM/yyyy"
                  )}
                </td>
                <td>{order?.order.book_name}</td>
                <td>{order?.order.book_price}</td>
                <td>1</td>
              </tr>
            ))}

            <tr>
              <th scope="row" colSpan="3"></th>
              <td>Total: $ {totalCost}</td>

              <td>Total Order: {allOrders.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      Thanks fro shopping with us...
    </div>
  );
};

export default Orders;
