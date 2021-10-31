import React from 'react';
import Footer from '../Footer/Footer';
import './Books.css';
import Slide from './Slide/Slide';

const Books = () => {
  <Slide></Slide>
  return (
    // ------------------    Books Delivery Carousel    ------------------
    <div className="">
    <Slide></Slide>
    
    <div className="About-container">
    
    {/* ------------------    Title    ------------------- */}
      <h2 className="section-title text-success">Delivery Books</h2>
      {/* ------------------    Details    ------------------- */}
      <h4 className="mt-1">Khan Book's Delivery point</h4>
      <p className="welcome-txt">Welcome to Our Book delivery point! We first opened our doors amidst  the Bicentennial celebrations of 1976 as the DC's first bookstore-cafe, and have been serving the Dupont community ever since. Over the years, through expansions, subpoenas, and innumerable neighborhood changes, much of our business has remained constant, including our commitment to providing our patrons with access to the best books we can procure and to the most delicious, varied food we can produc</p>

    <div className="terms-condition">
    <p><h3>Terms and Condition </h3>
        1.This service is available to University students, faculty, and staff, as well as library associate members and ETDA personnel and general people.
        <br />
        2.Book Delivery Times: 24/7
        <br />
        3.Readers may expect to receive books in transit between Tha Prachan and Rangsit campuses within 1 day of request. Books requested before 10 am can be delivered by 2.30 pm that day. Requests made after 10 am receive responses by 2:30 pm on the next business day (weekends and official holidays not included). Requests from Lampang and Pattaya campuses, and the ETDA Library, receive responses within 7 working days.
        <br />
        4.Borrowing privileges:
        <br />
        ***Faculty staff, researcher, librarian  60/semester
        ***Graduate, Ph.D., Post Grad. Student  40/15 days
        ***Bachelor degree student  20/15 days <br />
        ***TU Staff  20/15 days 
        ***Library associate members  5/15 days
        ***General people 3/15 days
        <br />
        5.If they arrive after the designated time, books for delivery will be held for 7 days before being returned to the original library.</p>
    </div>
    </div>
    <Footer></Footer>
    </div>
    
    
  );
};

export default Books;