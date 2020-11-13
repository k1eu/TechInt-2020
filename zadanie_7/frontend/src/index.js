import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, Link, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import NotFound from './NotFound'
import App from './App';
import About from './About'
import Items from './Items'


const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={
             {color:'red'}
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={
             {color:'green'}
          }>About</NavLink>
        </li>
        <li>
          <NavLink to='/items' exact activeStyle={
            {color:'pink'}
          }>Items</NavLink>
        </li>


        <li>
          <Link to="/contact">Contact
          </Link>
        </li>
      </ul>
      <Switch>
         <Route exact path="/" component={App} />
         <Route path="/about" component={About} />
         <Route path='/items' component={Items} />
         <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
