import React from "react";
import ReactDOM from "react-dom";
import baboon from "./baboon.png"
import './index.css';


const App = () =>
  <div>
    <h1>CHANGE ME</h1>
    <img src={baboon} />
    <h2>Test List</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>


ReactDOM.render(<App />, document.querySelector("#root"));
