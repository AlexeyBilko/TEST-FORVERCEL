import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import New from './new';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" ><App /></Route>
          <Route path="/page2"><New /></Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

