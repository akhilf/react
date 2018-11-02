import React, { Component } from 'react';
import people from '../images/people.png';
import icon from '../images/icon.png';

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndx
            ? "carousel-slide carousel-slide-active"
            : "carousel-slide"
        }
      >
        <div className="carousel-slide-image">
          <img src={this.props.slide.image_url} />
        </div>

        <div className="carousel-slide-container">
          <div className="carousel-top-container">
            <img src={people} className="carouselimg-people-container"/>
            <span className="carousel-slide-title">
              {this.props.slide.title}
            </span>
            <div className="carousel-slide-subtitle">
              {this.props.slide.subtitle}
            </div>
          </div>
          <div className="carousel-slide-content">
            {this.props.slide.text}
          </div>
          <div className="carousel-slide-icon">
            <img src={icon} className="icon-image"/>
          </div>
        </div>
      </li>
    );
  }
}
export default CarouselSlide;
