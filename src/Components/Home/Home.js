import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const [isDisplaySpinner, setIsDisplaySpinner] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-mesa-35453.herokuapp.com/getAllProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsDisplaySpinner(false);
      });
  }, []);

  return (
    <div>
      <div className="text-center m-auto">
        <form>
          <fieldset
            disabled
            className="d-flex m-auto p-5"
            style={{ maxWidth: 500 }}
          >
            <input
              className="form-control m"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info" type="submit">
              Search
            </button>
          </fieldset>
        </form>
      </div>
      {isDisplaySpinner && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
        {products.map((pd) => (
          <ProductCard product={pd} key={pd._id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
