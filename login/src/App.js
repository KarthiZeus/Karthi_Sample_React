import React, { Component } from 'react';
import './App.css';
import A from './test';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title"> SA CAFE
          <span className="UserName">Welcome Karthi</span>
          </div>
        </header>
        {/* <div className="container Itemhead">
            List of Items
          </div> */}
        <A className="Items"/>
      </div>  
    );
  }
}

export default App;
