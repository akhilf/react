import React, { Component } from 'react';
import CarouselLtArrow from './CarouselLtArrow';
import CarouselRtArrow from './CarouselRtArrow';
import CarouselSlide from './CarouselSlide';


// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndx: 0
    };
  }

  prevSlide = () => {
    let index = this.state.activeIndx;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }
    --index;

    this.setState({
      activeIndx: index
    });
  }

  nextSlide = () => {
    let index = this.state.activeIndx;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;

    this.setState({
      activeIndx: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <ul className="carousel-slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndx={this.state.activeIndx}
              slide={slide}
            />
          )}
        </ul>
        <div>
          <CarouselLtArrow onClick={() => this.prevSlide()} />
          <CarouselRtArrow onClick={() => this.nextSlide()} />
        </div>
      </div>
    );
  }
}


export default Carousel;
