import React from "react";
import ReactDOM from "react-dom";
import baboon from "./baboon.png"
import './index.css';

import ProgressiveImage from "./ProgressiveImage";


const App = () =>
  <div className="App">
    <ProgressiveImage
      className={"cover"}
      alt={"woman"}
      overlaySrc={
        "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
      }
      src={
        "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }
    />
  </div>


ReactDOM.render(<App />, document.querySelector("#root"));
