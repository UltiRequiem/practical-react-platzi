import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hello World'
    };
  }

  render() {
    return <h1>{this.state}</h1>;
  }
}

export default Stateful
