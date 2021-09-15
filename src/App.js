import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
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
  );
}

export default App;
