import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    book_name,
    book_image,
    author_name,
    book_price,
    book_description,
  } = product;
  const imgStyle = {
    objectFit: "contain",
    maxHeight: 350,
  };
  const cardStyle = {
    borderRadius: 0,
    background: "#ffffff",
    boxShadow: "11px 11px 22px #d6d6d6, -11px -11px 22px #ffffff",
  };
  return (
    <div className="col">
      <div className="card h-100 border-info" style={cardStyle}>
        <img
          src={book_image}
          className="card-img-top m-auto w-50 p-2"
          style={imgStyle}
          alt="..."
        />
        <div className="card-body bg-light text-dark">
          <h5 className="card-title">{book_name}</h5>
          <p>Author : {author_name}</p>
          <hr></hr>
          <p className="card-text">{book_description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <small className="text-muted">
            <i className="bi bi-tags-fill"></i> Price : ${book_price}
          </small>{" "}
          <Link to={`/check-out?id=${_id}`}>
            <button className="btn btn-info">
              <i className="bi bi-cart-plus-fill"></i> Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
