import React, { Component } from "react";
import { Consumer } from "../../context/Context";
export default class Home extends Component {
  render() {
    return (
      <main id="home">
        <Consumer>
          {(value) => {
            const { firstName, lastName, education } = value.author;
            return (
              <React.Fragment>
                <h1 className="lg-heading">
                  {firstName}
                  <span className="text-secondary">{lastName}</span>
                </h1>
                <h2 className="sm-heading">{education}</h2>
              </React.Fragment>
            );
          }}
        </Consumer>
        <div className="icons">
          <a href="#!">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
    );
  }
}
