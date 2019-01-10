import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Button
          tag="a"
          color="success"
          size="large"
          href="http://reactstrap.github.io"
          targe="_blank"
          >View Reactstrap</Button>
        </header>
      </div>
    );
  }
}

export default App;
