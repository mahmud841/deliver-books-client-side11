import React from "react";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  return (
    <div className="container p-2 mt-4">
      Here you can easily confirm your favourite Book ordering ...
      <div className="container p-2 mt-4">
        <div className="progress">
          <div
            className="progress-bar bg-warning "
            role="progressbar"
            style={{ width: "15%" }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Ordered 3/4/21
          </div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "30%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Ready 4/5/21
          </div>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "35%" }}
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Shipped 5/6/21
          </div>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Estimated delivery 13/7/21
          </div>
        </div>
      </div>
      <h4 className="text-center">Updates</h4>
      <div className="">
        <div className="table-responsive m-3">
          <table className="table table-info">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Events</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">5/8/21</th>
                <td>Dhaka</td>
                <td>
                  <p>
                    <b>Delivered</b>
                  </p>
                  <p>deliver-product: Hamburg Süd </p>{" "}
                  <p>Tracking id : "123dsDsdf3442kkhy342ffs"</p>
                </td>
              </tr>
              <tr>
                <th scope="row">4/9/21</th>
                <td>Chittagong</td>
                <td>
                  <p>Ready</p>
                  <p>Waiting for the Delivery</p>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  2/10/21
                </th>

                <td>Product Received</td>
              </tr>
            </tbody>
          </table>
          <Link to="/orders">
            {" "}
            <button className="btn btn-success"> Back to Booking Page</button>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default OrderTracking;
