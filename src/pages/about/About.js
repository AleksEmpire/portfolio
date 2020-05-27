import React, { Component } from "react";
import { Consumer } from "../../context/Context";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <title>About me</title>

        <main id="about">
          <h1 className="lg-heading">
            About
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className="about-info">
            <img
              src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Aleksandr Petrovic"
              width="250px"
              height="250px"
              className="bio-image"
            />

            <div className="bio">
              <Consumer>
                {(value) => {
                  const { title, description } = value.biography;
                  return (
                    <React.Fragment>
                      <h3 className="text-secondary">{title}</h3>
                      <p>{description}</p>
                    </React.Fragment>
                  );
                }}
              </Consumer>
            </div>

            <Consumer>
              {(value) => {
                const { jobPosition } = value;
                return jobPosition.map((job) => {
                  const { id, title, subTitle, description } = job;
                  return (
                    <div key={id} className={`job job-${id}`}>
                      <h3>{title}</h3>
                      <h6>{subTitle}</h6>
                      <p>{description}</p>
                    </div>
                  );
                });
              }}
            </Consumer>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
