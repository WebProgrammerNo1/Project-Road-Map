import React, { Component } from "react";
import "../css/styles.css";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-custom navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <span>RoadMap</span>Admin
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
