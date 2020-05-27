import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./context/Context";
import "./App.css";
import "./styles/main.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/projects" component={Work}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </Provider>
    );
  }
}
