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
import Footer from './Footer';

import {BrowserRouter as Router} from 'react-router-dom';

import DieuHuongURL from '../Router/DieuHuongURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg-login">
            <div className="wrapper">

              <Header/>
                      <DieuHuongURL/>
              <Footer/>

            </div>
        </div>
      </Router>
    );
  }
}

export default App;