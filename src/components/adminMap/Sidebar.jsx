import React, { Component } from "react";
import logo from "../css/camera-icon.png";
// import "../css/styles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

class Sidebar extends Component {
  render() {
    return (
      <>
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img src={logo} className="img-responsive" alt="" />
            </div>
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">kahhorjonov</div>
              <div className="profile-usertitle-status">
                <span className="indicator label-success"></span>Online
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="divider"></div>
          <ul className="nav menu">
            <li className="active">
              <a href="index.html">
                <em className="fa fa-dashboard">&nbsp;</em> Constructor Maps
              </a>
            </li>
            <li>
              <a href="widgets.html">
                <em className="fa fa-calendar">&nbsp;</em> Widgets
              </a>
            </li>
            <li>
              <a href="charts.html">
                <em className="fa fa-bar-chart">&nbsp;</em> All Roads
              </a>
            </li>
            <li>
              <a href="elements.html">
                <em className="fa fa-toggle-off">&nbsp;</em> UI Elements
              </a>
            </li>
            <li>
              <a href="panels.html">
                <em className="fa fa-clone">&nbsp;</em> Alerts &amp; Panels
              </a>
            </li>
            <li>
              <a href="login.html">
                <em className="fa fa-power-off">&nbsp;</em> Logout
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
