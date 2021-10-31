import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ManageProducts = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://enigmatic-mesa-35453.herokuapp.com/getAllProducts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => {
    fetch("https://enigmatic-mesa-35453.herokuapp.com/getAllProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const deleteProduct = (id) => {
    fetch("https://enigmatic-mesa-35453.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        fetchAllProducts();
      });
  };

  return (
    <table className="table table-info table-hover ">
      <thead>
        <tr>
          <th scope="col text-center">Book Name</th>
          <th scope="col text-center">Author Name</th>
          <th scope="col text-center">Price</th>
          <th scope="col text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {product.map((pd) => (
          <tr key={pd._id}>
            <td>{pd.book_name}</td>
            <td>{pd.author_name}</td>
            <td>{pd.book_price}</td>
            <td className="text-danger">
              <div className="d-flex">
                <p
                  className="mx-3 text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteProduct(pd._id)}
                >
                  <i className="bi bi-trash-fill"></i>
                </p>
                <Link to={`/edit-product?product-id=${pd._id}`}>
                  <p style={{ cursor: "pointer" }}>
                    <i className="bi bi-pen-fill text-warning"></i>
                  </p>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageProducts;
