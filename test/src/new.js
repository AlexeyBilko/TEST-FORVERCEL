import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function New() {
  return (

    <div className="App">
        <ul>
              <li>
                <a><Link to="/" >Page 1</Link></a>
              </li>
              <li>
                <a><Link to="/page2" >Page 2</Link></a>
              </li>
            </ul>
        <h2>New</h2>
    </div>
  );
}

export default New;
