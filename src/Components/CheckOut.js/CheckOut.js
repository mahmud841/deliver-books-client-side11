import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const CheckOut = () => {
  const [product, setProduct] = useState({});
  const { user } = useContext(UserContext);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const id = query.get("id");
  let history = useHistory();
  //new
  if (!id) {
    history.push("/");
  }

  //

  useEffect(() => {
    fetch(`https://enigmatic-mesa-35453.herokuapp.com/getProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handlePlaceOrder = () => {
    const orderDetails = {
      ...user,
      order: { order_placement_time: new Date(), ...product },
    };

    fetch("https://enigmatic-mesa-35453.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/orders");
      });
  };

  const imageStyle = { height: 55, width: "auto", objectFit: "contain" };

  return (
    <div className="container m-auto">
      <h2 className="m-4">CheckOut:</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book Name</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{product?.book_name} </th>
              <td>
                <img src={product.book_image} alt="" style={imageStyle} />{" "}
              </td>
              <td>1</td>
              <td>{product.book_price}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handlePlaceOrder}>
          Checkout{" "}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => window.history.go(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
