import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Main from "./Main";
import history from "../history";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="body-container">
        <Router history={history}>
          <Nav />
          <div className="main-container">
            <Switch>
              <Route path="/" exact component={Main} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
