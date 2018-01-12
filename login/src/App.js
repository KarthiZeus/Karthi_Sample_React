import React, { Component } from 'react';
import './App.css';
import A from './test';
import Login from './components/login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title"> SA CAFE
          <span className="UserName">Welcome Karthi</span>
          </div>
        </header>
        <Router>
            <div>
                  <Link to={'/'}></Link>
                  
               <Switch>
                  <Route exact path='/' component={A} />
                  <Route exact path='/viewcart' component={Login} />
               </Switch>
            </div>
         </Router>
      </div>  
    );
  }
}

export default App;
