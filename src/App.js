import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './compoents/navbar';
import Cards from './compoents/cards';

class App extends Component {
  state = {
    items : [
      {id:1, value: 0},
      {id:2, value: 0},
      {id:3, value: 0},
      {id:4, value: 0},
      {id:5, value: 0},
      {id:6, value: 0},
      {id:7, value: 0},
      {id:8, value: 0},
      {id:9, value: 0},
      {id:10, value: 0},
    ]
  };
  constructor() {
    super();
    console.log("App - constructor");
  }
  compoentDidMount() {
    //Ajax calll
    // setState
    console.log('App - Mounted');
  }
  handleReset = () => {
    const items = this.state.items.map(c=> {
      c.value = 0;
      return c;
    });
    this.setState({items});
  };
  handleIncrment = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].value++;
    this.setState({items});
  }
  handleDelete = itemsId => {
    const items = this.state.items.filter(c => c.id !== itemsId);
    this.setState({items});
  }
  render() {
    console.log('App rendered');
    return (
      <React.Fragment>
        <Navbar totalNumbers={this.state.items.filter(c => c.value > 0).length}/>
        <main className="container">
          <Cards items={this.state.items}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrment}
                    onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
