import React, { Component } from "react";
import { Consumer } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
export default class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <title>View My Work</title>
        <main id="work">
          <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <div className="projects">
            <Consumer>
              {(value) => {
                const { projectWork } = value;

                return projectWork.map((work) => {
                  const { projectImg, link } = work;
                  return (
                    <div key={uuidv4()} className="item">
                      <a href={link}>
                        <img src={projectImg} alt="Project" />
                      </a>
                      <a href={link} className="btn-light">
                        <i className="fas fa-eye"></i> Project
                      </a>
                      <a href={link} className="btn-dark">
                        <i className="fab fa-github"></i> Github
                      </a>
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
