import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Another way to render a page
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Header!!!</p>
        <img src="https://i.imgur.com/dJoDSln.png" />
      </header>
    );
  }
}
//這種只能單行，需要用下面的return
/* const Body = () => <p>THis is really good Body.</p>; */
//這種有return可以多行。
const Body = () => {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Header />
        <Body />
      </header>
    </div>
  );
}

export default App;
