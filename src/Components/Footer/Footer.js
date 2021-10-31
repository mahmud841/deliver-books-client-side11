import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer mt-5">
      <div>
        <div>
          <div>
            <p>Our Services</p>
          </div>
          <div>
            <small>Emergency Booking Point</small>
            <br />
            <small>Engineering Department Books</small>
            <br />
            <small>Biography of World Legends</small>
            <br />
            <small>Literature Department </small>
            <br />
            <small>Chemistry Department Books </small>
          </div>
        </div>
        <div>
          <div>
            <p> Book Delivery and Ordered Point </p>
          </div>
          <div>
            <small>Urgent Delivery</small>
            <br />
            <small>Order Here</small>
            <br />
            <small>Normal Booking</small>
            <br />
            <small>Dynamic Booking</small>
            <br />
            <small>Order Here</small>
          </div>
        </div>
        <div>
          <div>
            <p>Our Address</p>
          </div>
          <div>
            <small> Uttara, Dhaka,Bangladesh</small>
            <div className="brandIcon">
               <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faGooglePlusG} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <small>Call Now +8801378164897</small>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <small>Copyright 2021 || All Right Reserved</small>
      </div>
    </div>
  );
};

export default Footer;
