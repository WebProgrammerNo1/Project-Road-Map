import React, { Component } from "react";
import Navbar from "./adminMap/Navbar";
import Sidebar from "./adminMap/Sidebar";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default AdminPage;
