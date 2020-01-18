import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Users from './components/users/App';

export default function App() {
  return (
    <Router>
      <div>

        <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>My React</a>
        <ul class="right hide-on-med-and-down">
          <li><Link to="/"><i class="material-icons">search</i></Link></li>
          <li><Link to="/about"><i class="material-icons">view_module</i></Link></li>
          <li><Link to="/users"><i class="material-icons">refresh</i></Link></li>
          <li><Link to="/"><i class="material-icons">more_vert</i></Link></li>
        </ul>
      </div>
    </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


function About() {
  return <h2>About</h2>;
}
