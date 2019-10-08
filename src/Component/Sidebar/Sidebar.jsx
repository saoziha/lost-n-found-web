import React, {Component} from 'react';
import {Nav} from "reactstrap";
import {NavLink} from "react-router-dom";
import {PropTypes} from "prop-types";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  // verifies if routeName is the one active (in browser input)
  activeRoute = (routeName) => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  render() {
    let {bgColor, routes} = this.props;
    return (
      <div className="sidebar"
           data={bgColor}>
        <div className="sidebar-wrapper"
             ref="sidebar">
          <Nav>
            {
              routes.map((route, index) => {
                return (
                  <li key={index}
                      className={
                        this.activeRoute(route.path) +
                        (route.undefined ? " active-pro" : "")
                      }
                  >
                    <NavLink
                      // link to route
                      to={route.layout + route.path}
                      className="nav-link"
                      activeClassName="active"
                      onClick={this.props.toggleSidebar}
                    >
                      <i className={route.icon}/>
                      <p>{route.name}</p>
                    </NavLink>
                  </li>
                )
              })
            }
          </Nav>

        </div>

      </div>
    );
  }
}


Sidebar.propTypes = {
  //check value of route have to array object
  routes: PropTypes.arrayOf(PropTypes.object)
};


export default Sidebar;