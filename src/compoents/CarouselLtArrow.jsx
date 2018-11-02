import React, { Component } from 'react';

class CarouselLtArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel-arrow carousel-arrow-left"
        onClick={this.props.onClick}
        >
        <i></i>
      </a>
    );
  }
}

export default CarouselLtArrow;
