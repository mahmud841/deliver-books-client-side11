import React from "react";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  return (
    <div className="container p-2 mt-4">
      Here you can easily track your order...
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
            Ordered 2/4/21
          </div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "30%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Ready 4/4/21
          </div>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "35%" }}
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Shipped 5/4/21
          </div>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Estimated delivery 13/4/21
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
                <th scope="row">5/4/21</th>
                <td>Chittagong</td>
                <td>
                  <p>
                    <b>shipped</b>
                  </p>
                  <p>carrier: Hamburg Süd </p>{" "}
                  <p>Tracking id : "123dsDsdf3442kkhy342ffs"</p>
                </td>
              </tr>
              <tr>
                <th scope="row">4/4/21</th>
                <td>Chittagong</td>
                <td>
                  <p>Ready</p>
                  <p>Waiting for the carrier</p>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  2/4/21
                </th>

                <td>Order received</td>
              </tr>
            </tbody>
          </table>
          <Link to="/orders">
            {" "}
            <button className="btn btn-primary"> Back to order page</button>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default OrderTracking;
