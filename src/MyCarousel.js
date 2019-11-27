import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <p>this is el inside carousel</p>
      </Carousel>
    );
  }
}
