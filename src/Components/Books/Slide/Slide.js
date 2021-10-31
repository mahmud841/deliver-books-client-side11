import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../logo/carousel1.jpg';
import carousel2 from '../../../logo/carousel2.jpg';
import carousel3 from '../../../logo/carousel3.jpg';

const Slide = () => {
  return (
    <div>
       <>
    <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel1}
    alt="Delivery Book Point"
  />
  <Carousel.Caption className="text-dark">
    <h3>Khan Book's Delivery Point</h3>
    <p>Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel2}
    alt="Second slide"
  />

  <Carousel.Caption className="text-dark">
    <h3>Khan Book's Delivery Point</h3>
    <p>Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel3}
    alt="Third slide"
  />

  <Carousel.Caption className="text-dark">
    <h3>Khan Book's Delivery Point</h3>
    <p>The library is inhabited by spirits that come out of the pages at night.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  </>
    </div>
  );
};

export default Slide;