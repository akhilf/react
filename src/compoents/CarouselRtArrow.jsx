import React, { Component } from 'react';

class CarouselRtArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel-arrow carousel-arrow-right"
        onClick={this.props.onClick}
      >
        <i></i>
      </a>
    );
  }
}

export default CarouselRtArrow;
