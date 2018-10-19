import React, { Component } from 'react';

class Card extends Component {
  state = {
    value:this.props.item.value
  }
  compoentDidUpdate(preProps, prevState) {
    console.log("preProps",preProps);
    console.log("prevState",prevState);
  }
  compoentWillUnmount(){
    console.log("item - unmount");
  }
  render(){
    return(
      <div className="card img-container">
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.props.onIcrement(this.props.item)} className="btn btn-secondary btn-sm">Add to Cart</button>
          <button onClick={() => this.props.onDelete(this.props.item.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
    </div>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount(){
    const { value } = this.props.item;
    return value === 0 ? "Zero Items" : value+" Items";
  }
}

export default Card;
