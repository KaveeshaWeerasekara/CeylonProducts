import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Array = [
  {
    image:
      "https://frameru.com/wp-content/uploads/2021/06/demodara-nine-arch-bridge-ella-sri-lanka-scaled-1.jpg",
  },
  {
    image:
      "https://saltinourhair.com/wp-content/uploads/2017/04/Things-To-Do-Mirissa-Sri-Lanka-parrot-rock.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561296180-e8100fd714e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
  },
  {
    image:
      "https://windows10spotlight.com/wp-content/uploads/2021/02/d9d63fa95589dfdf69bcfd4397614bb0.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600521605615-a8d3a23d8262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  },
];

const AnimatedSlider = () => (
  <div>
    
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] brightness-90"
          src={Array[0].image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nine Arch Bridge</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] brightness-75"
          src={Array[1].image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mirissa</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] brightness-90"
          src={Array[2].image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Maskeliya Tea Estate</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] brightness-90"
          src={Array[3].image}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Sigiriya</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] brightness-75"
          src={Array[4].image}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Yala National Park</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
  </div>
);

export default AnimatedSlider;
