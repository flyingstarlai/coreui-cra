import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Styles
// // Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// // Import Main styles for this application
import './styles/css/style.css'
// // Temp fix for reactstrap
import './styles/css/dropdown-menu-right.css'
// // Containers
import Full from './containers/Full/'
//
// // Views
ReactDOM.render((
  <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={Full}/>
      </Switch>
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
