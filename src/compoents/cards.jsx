import Card from './card';
import React, { Component } from 'react';

class Cards extends Component {

  render(){
    return (
      <div>
        <div><button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button></div>
        {this.props.items.map(item => <Card
          onIcrement={this.props.onIncrement}
          onDelete={this.props.onDelete}
          key={item.id}
          item={item} />)}
      </div>
    )
  }
}

export default Cards;
