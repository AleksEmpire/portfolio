import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <title>Contact Me</title>

        <main id="contact">
          <h1 class="lg-heading">
            Contact
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">This is how you can reach me...</h2>
          <div className="boxes">
            <div>
              <span className="text-secondary">Email: </span> johndoe@test.com
            </div>
            <div>
              <span className="text-secondary">Phone: </span> (555) 555-5555
            </div>
            <div>
              <span className="text-secondary">Address: </span> 50 Main st
              Boston MA 02101
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
