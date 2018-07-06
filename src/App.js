import React, { Component } from 'react';
import routes from './router/routes'
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
       {routes}
      </div>
    );
  }
}

export default App;
