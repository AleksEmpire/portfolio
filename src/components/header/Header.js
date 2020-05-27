import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { Consumer } from "../../context/Context";

export default class Header extends Component {
  state = {
    showMenu: false,
  };
  toggleMenu = (dispatch) => {
    // dispatch({ type: "TOGGLE_MENU" });
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };
  render() {
    const { showMenu } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { headerLinks, dispatch } = value;
          return (
            <header>
              <div
                className={`${showMenu ? "menu-btn close" : "menu-btn"}`}
                onClick={this.toggleMenu}
              >
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
              </div>

              <nav
                className={`${showMenu ? "menu show" : "menu"}`}
                onClick={this.toggleMenu.bind(this, dispatch)}
              >
                <div
                  className={`${
                    showMenu ? "menu-branding show" : "menu-branding"
                  }`}
                >
                  <div className="portrait"></div>
                </div>
                <ul className={`${showMenu ? "menu-nav show" : "menu-nav"}`}>
                  {headerLinks.map((headerLink) => {
                    const { pageLink, navLink } = headerLink;

                    return (
                      <li
                        key={uuidv4()}
                        className={`${showMenu ? "nav-item show" : "nav-item"}`}
                      >
                        <NavLink
                          exact
                          to={pageLink}
                          className="nav-link"
                          activeClassName="nav-link-active"
                        >
                          {navLink}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </header>
          );
        }}
      </Consumer>
    );
  }
}
