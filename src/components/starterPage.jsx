import React, { Component } from "react";
import "./StarterPage.css";

import "bootstrap/dist/css/bootstrap.css";

class StarterPage extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div className="App-message">
              <p>Login va Parolingizni kiriting</p>
            </div>
            <div className="App-input">
              <input className="input" placeholder="login" type="text"></input>
              <input
                className="input"
                placeholder="password"
                type="password"
              ></input>
            </div>
            <div className="App-footer">
              <button className="btn btn-submit bg-light mt-4">Submit</button>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default StarterPage;
