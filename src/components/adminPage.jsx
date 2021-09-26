import React, { Component } from "react";
import Navbar from "./adminMap/Navbar";
import Roads from "./adminMap/Roads";
import Sidebar from "./adminMap/Sidebar";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Roads />
      </div>
    );
  }
}

export default AdminPage;
