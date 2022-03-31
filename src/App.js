import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer.js';

import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Message from './components/pages/Message.js';
import Education from './components/pages/Education';
import FoodBank from './components/pages/FoodBank';

import Qurbani from './components/pages/Qurbani';
import Registration from './components/pages/Registration/Registration';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Login from './components/pages/Login/Login';

import Review from './components/pages/Review/Review';
import Blood_donation from './components/pages/Blood_donation';
import Contribute from './components/pages/Contribute/Contribute';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
 
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/message' component={Message} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/foodbank' component={FoodBank} />
        <Route exact path='/bloodDonation' component={Blood_donation} />
        
        
        <Route exact path='/qurbani' component={Qurbani} />
        <Route exact path='/review' component={Review} />
        <Route exact path='/contribute' component={Contribute} />

      </Switch>
      <Footer />
    </Router>
   
  );
};

export default App;
