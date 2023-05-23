import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ maxHeight: "50vh" }}
    >
      <Carousel.Item style={{ maxHeight: "50vh" }}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/futuristic-ai-technology-template-vector-disruptive-technology-blog-banner_53876-117833.jpg?size=626&ext=jpg&ga=GA1.2.823769199.1683223731&semt=ais"
          alt="First slide"
          style={{ maxHeight: "50vh" }}
        />
        <Carousel.Caption>
          <h3>Question</h3>
          <p>Answer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1060&t=st=1684839630~exp=1684840230~hmac=3cda843dc5e1d635164d2830084763c384d4021c3938d499126a61bb3c2ec9a2"
          alt="Second slide"
          style={{ maxHeight: "50vh" }}
        />

        <Carousel.Caption>
          <h3>Question</h3>
          <p>Answer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/ai-machine-learning-template-vector-disruptive-technology-blog-banner_53876-112230.jpg?size=626&ext=jpg&ga=GA1.2.823769199.1683223731&semt=ais"
          alt="Third slide"
          style={{ maxHeight: "50vh" }}
        />

        <Carousel.Caption>
          <h3>Question</h3>
          <p>Answer</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
