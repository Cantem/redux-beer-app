import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home";
import Checkout from "../Checkout";
import { fetchBeers } from "../../actions/beersActions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBeers());
  }

  render() {
    return (
      <div>
        <header className="header">
          <img
            src={require("../../static/beerIcon.png")}
            className="logo"
            alt="beer-icon"
            height="60px"
          />
          <div className="header-right">
            <Link className="active" to="/">
              Home
            </Link>
            <Link className="checkout" to="/checkout">
              Checkout
            </Link>
          </div>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
        </main>
      </div>
    );
  }
}

export default App;
