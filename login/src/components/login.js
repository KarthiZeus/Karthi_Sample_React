import React, { Component } from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';

class Login extends Component {
   render() {
      return (
         <div>
            <h2>Login</h2>
            <Link to={'/'}>Home</Link>
         </div>
      );
   }
}
export default Login;