import React, { Component } from "react";
import project1Img from "../images/projects/project1.jpg";
import project2Img from "../images/projects/project2.jpg";
import project3Img from "../images/projects/project3.jpg";
import project4Img from "../images/projects/project4.jpg";
import project5Img from "../images/projects/project5.jpg";

const Context = React.createContext();
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_MENU":
//       return {
//         ...state,
//         showMenu: !state.showMenu,
//       };
//     default:
//       return state.showMenu;
//   }
// };
export class Provider extends Component {
  state = {
    // showMenu: false,
    headerLinks: [
      {
        id: "1",
        pageLink: "/",
        navLink: "Home",
      },
      {
        id: "2",
        pageLink: "/about",
        navLink: "About Me",
      },
      {
        id: "3",
        pageLink: "/projects",
        navLink: "My Work",
      },
      {
        id: "4",
        pageLink: "/contact",
        navLink: "How to contact me",
      },
    ],
    author: {
      firstName: "Aleksandar ",
      lastName: "Petrovic",
      education: "Web Developer, Network & System Security Administrator",
      authorImg: "../../images/portrait.jpg",
    },
    biography: {
      title: "BIOGRAPHY",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserun magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis> Praesentium, laborum",
    },
    jobPosition: [
      {
        id: "1",
        title: "WordPress",
        subTitle: "Full Stack Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.",
      },
      {
        id: "2",
        title: "React, VanilaJS, CSS3, HTML5, HTML",
        subTitle: "Front End Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.",
      },
      {
        id: "3",
        title: "Adobe Photoshop",
        subTitle: "Graphic Designer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.",
      },
    ],
    projectWork: [
      {
        projectImg: project1Img,
        link: "#",
      },
      {
        projectImg: project2Img,
        link: "#",
      },
      {
        projectImg: project3Img,
        link: "#",
      },
      {
        projectImg: project4Img,
        link: "#",
      },
      {
        projectImg: project5Img,
        link: "#",
      },
    ],

    // dispatch: (action) => {
    //   this.setState((state) => reducer(state, action));
    // },
  };
  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu,
  //   });
  // };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
