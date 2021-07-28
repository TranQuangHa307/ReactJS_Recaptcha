import React, { Component } from 'react';
import Header from './Header';

import '../assets/images/favicon-32x32.png';
import '../assets/plugins/simplebar/css/simplebar.css';
import '../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css';
import '../assets/plugins/metismenu/css/metisMenu.min.css';
import '../assets/css/pace.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/app.css';
import '../assets/css/icons.css';
import Login from './Login';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="bg-login">
	        <div className="wrapper">
            <Header/>
            <Login/>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;