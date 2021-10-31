import React from "react";

const ManageOrders = () => {


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
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
