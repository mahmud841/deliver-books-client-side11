import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [productImg, setProductImage] = useState("");
  const [productData, setProductData] = useState({
    book_name: "",
    author_name: "",
    book_price: 0,
    book_description: "",
    book_image: " ",
  });
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var imageData = new FormData();
    imageData.set("key", "2eb131723a878591ca75a07777111d17");
    imageData.append("image", productImg);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        finalUpload(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const finalUpload = (image) => {
    const finalEventData = { ...productData };
    finalEventData.book_image = image;
    fetch("https://enigmatic-mesa-35453.herokuapp.com/insertProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalEventData),
    })
      .then((res) => res.json())
      .then((data) => {
        setConfirmMessage(data.message);
        hideMessage();
      });
  };

  const hideMessage = () => {
    setTimeout(() => {
      setConfirmMessage("");
    }, [10000]);
  };
  const handleInputChange = (e) => {
    const newEvent = { ...productData };
    newEvent[e.target.name] = e.target.value;
    setProductData(newEvent);
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="bookName" className="form-label">
          <i className="bi bi-book-fill"></i> Book Name
        </label>
        <input
          name="book_name"
          type="text"
          className="form-control"
          id="bookName"
          required
          onBlur={(e) => handleInputChange(e)}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="authorName" className="form-label">
          <i className="bi bi-pen-fill"></i> Author Name
        </label>
        <input
          name="author_name"
          type="text"
          className="form-control"
          id="authorName"
          required
          onBlur={(e) => handleInputChange(e)}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="bookPrice" className="form-label">
          <i className="bi bi-tags-fill"></i> Book price
        </label>
        <input
          name="book_price"
          type="number"
          min={1}
          className="form-control"
          id="bookPrice"
          required
          onBlur={(e) => handleInputChange(e)}
        />
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="bookFile" className="form-label">
            <i className="bi bi-cloud-arrow-up-fill"></i> Upload image
          </label>

          <input
            className="form-control"
            type="file"
            id="bookFile"
            required
            onChange={(e) => {
              setProductImage(e.target.files[0]);
            }}
          />
        </div>
      </div>{" "}
      <div className="col-12 p-3">
        <div className="form-floating">
          <textarea
            name="book_description"
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            onBlur={(e) => handleInputChange(e)}
            required
          ></textarea>
          <label htmlFor="floatingTextarea2">
            <i className="bi bi-card-text"></i> Short description
          </label>
        </div>
      </div>
      {confirmMessage && (
        <div className="col-12">
          <p className="p-3 bg-info">{confirmMessage}</p>
        </div>
      )}
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Upload Book
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
