import React, {useState} from "react";

import "./styles/app.css";




const App = (props) => {
  const propsList = props.buttonText
 
  const [buttonText, setButtonText] = useState(propsList)
  const [classesList, setClassesList] = useState('')
 
  const onButtonClick = () => {
    
  
      setClassesList('green-btn')
    setButtonText('Hello React')
}

let [count, setCount] = useState(1);


function increment () {
  setCount(count + 1)
}

function decrement () {
  setCount(count - 1)
}

  return (
    <div className="App">
      <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )

}
 

export default App;
