import React from "react";
import AddProduct from "./AddProduct";
import ManageOrders from "./ManageOrders";
import ManageProducts from "./ManageProducts";

const AdminPanel = () => {
  const tabContentStyle = { height: "83vh", overflow: "scroll" };
  const rightTab = { position: "fixed", right: 0, padding: 10 };
  return (
    <div className="d-flex align-items-start w-100 h-100">
      <div
        className="nav flex-column nav-pills me-3 w-25 bg-info admin-options"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link "
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          style={{ textAlign: "left" }}
        >
          <i className="bi bi-kanban-fill"></i> Manage Books
        </button>
        <button
          className="nav-link active"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
          style={{ textAlign: "left" }}
        >
          <i className="bi bi-plus-circle-fill"></i> Add Book
        </button>
        <button
          className="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
          style={{ textAlign: "left" }}
        >
          <i className="bi bi-pen-fill"></i> Manage Orders
        </button>
      </div>
      <div
        className="tab-content w-75 "
        id="v-pills-tabContent"
        style={rightTab}
      >
        <div
          className="tab-pane fade  "
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <div
            className="table-responsive rounded-3 border"
            style={tabContentStyle}
          >
            <ManageProducts />
          </div>
        </div>
        <div
          className="tab-pane fade show active"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <div style={tabContentStyle}>
            <h2 className="m-4">Add books</h2>
            <AddProduct />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
        >
          <div style={tabContentStyle}>
            <h2>List of all orders placed by customers.</h2>

            {/* <EditProduct /> */}
            <ManageOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
