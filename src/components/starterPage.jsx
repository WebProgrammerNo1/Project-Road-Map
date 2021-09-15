import React, { Component } from "react";
import "./StarterPage.css";

import "bootstrap/dist/css/bootstrap.css";
import { getAccounts } from "./FakeAccounts";

class StarterPage extends Component {
  state = {
    accounts: getAccounts(),
  };

  handleCheck = () => {
    const accounts = [...this.state.accounts];
    const currentAccountLogin = document.querySelector(".login").value;
    const currentAccountPassword = document.querySelector(".password").value;
    const adminPage = document.querySelector(".adminPage");
    const appPage = document.querySelector(".App");
    let currentAccount;

    currentAccount = accounts.find((acc) => acc.login === currentAccountLogin);

    // console.log(currentAccount);

    if (currentAccount.pin === Number(currentAccountPassword)) {
      adminPage.classList.toggle("hidden");
      appPage.classList.add("hidden");
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div className="App-message">
              <p>Login va Parolingizni kiriting</p>
            </div>
            <div className="App-input">
              <input
                className="input login"
                placeholder="login"
                type="text"
              ></input>
              <input
                className="input password"
                placeholder="password"
                type="password"
              ></input>
            </div>
            <div className="App-footer">
              <button
                onClick={() => this.handleCheck(this.accounts)}
                className="btn btn-submit bg-light mt-4"
              >
                Submit
              </button>
            </div>
          </header>
        </div>

        <div className="adminPage hidden">
          <p>Hello Friend</p>
        </div>
      </div>
    );
  }
}

export default StarterPage;
