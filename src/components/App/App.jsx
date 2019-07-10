import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>
          My React App!
          {value}
        </h1>
      </div>
    );
  }
}

export default App;
