import React, { useState } from "react";
import ReactDOM from "react-dom";
import baboon from "./baboon.png"
import './index.css';

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}



const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  return (
    <div>
      <h1>Counter</h1>
      <Button increment={1} onClickFunction={incrementCount}/>
      <Button increment={10} onClickFunction={incrementCount}/>
      <Button increment={100} onClickFunction={incrementCount}/>
      <Button increment={1000} onClickFunction={incrementCount}/>
      <span>{count}</span>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
