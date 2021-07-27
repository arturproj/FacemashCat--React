import React from "react";
import { render } from "react-dom";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { findAnyCats } from "./helpers/cats.api";

import HomeView from "./layout/HomeView";
import ScoreView from "./layout/ScoreView";

import "bootstrap/dist/css/bootstrap.min.css";
import "soft-ui-design-system/assets/css/soft-design-system.min.css";
import "./css/app.css";

console.log("Hello webpack!");

class App extends React.Component {
  constructor(state) {
    super(state);

    this.state = {
      cats: [],
    };
  }

  componentDidMount() {

    
    findAnyCats().then((res) => this.setState({ cats: res }));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { cats } = this.state;
    return (
      <HashRouter basename="/">
          <Route exact path="/facemash-cat-react/score/">
            <ScoreView cats={cats} />
          </Route>
          <Route exact path="/FacemashCat--React">
            <HomeView cats={cats} />
          </Route>
        </HashRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
