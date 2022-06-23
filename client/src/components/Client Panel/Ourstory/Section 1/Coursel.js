import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Array = [
  {
    image:
      "https://www.asianblurb.com/wp-content/uploads/2021/07/Team.jpg",
  },
  {
    image:
      "https://smartstrata.com/wp-content/uploads/2019/04/pexels-photo-1661004-1.jpeg",
  },
  {
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_43/3069726/191025-small-office-al-1155.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcnl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHR5cGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
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
          <h3></h3>
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
          <h3></h3>
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
          <h3></h3>
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
          <h3></h3>
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
          <h3></h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
  </div>
);

export default AnimatedSlider;
