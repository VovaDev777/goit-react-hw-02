import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import { useState } from "react"
import 'normalize.css';


const App = () => {

   const [values, setValue] = useState({
    good: Number(localStorage.getItem("good")),
    neutral: Number(localStorage.getItem("neutral")),
    bad: Number(localStorage.getItem("bad")),
   });
  //  console.log(values.good);
  
  const updateValueGood = () => {
    setValue({...values, good: values.good + 1});
    localStorage.setItem("good", values.good + 1);
  };
  const updateValueNeutral = () => {
    setValue({...values, neutral: values.neutral + 1});
    localStorage.setItem("neutral", values.neutral + 1);
  };
  const updateValueBad = () => {
    setValue({...values, bad: values.bad + 1});
    localStorage.setItem("bad", values.bad + 1);
  };
  
  const resetValue = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.clear();
  }

  // const updateHandler = (type) => {
  //     setValue({...values, [type]: values[type] + 1})
  // }

  return (
    <>
    <Description/>
    <Options 
    // options = {values}
    // handler={updateHandler}
    good={updateValueGood}
    neutral={updateValueNeutral}
    bad={updateValueBad}
    reset={resetValue}
    />
      {/* <button onClick={updateValueGood}>Good</button>
      <button onClick={updateValueNeutral}>Neutral</button>
      <button onClick={updateValueBad}>Bad</button>
      <button onClick={resetValue}>Reset</button> */}
      <Feedback
      good = {values.good}
      neutral = {values.neutral}
      bad = {values.bad}
      />
    </>
  )
}

export default App