import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import Notification from "../Notification/Notification"
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
  const isValues = values.good > 0;
  console.log(isValues)
  return (
    <>
    <Description/>
    <Options 
    // options = {values}
    // handler={updateHandler}
    onGoodFeedback={updateValueGood}
    onNeutralFeedback={updateValueNeutral}
    onBadFeedback={updateValueBad}
    onResetFeedback={resetValue}
    />
    {/* {isValues ? <Options/> : <Notification/>} */}
    {/* if (!isValues) {
      <Notification/>
    } else {
      <Options 
    onGoodFeedback={updateValueGood}
    onNeutralFeedback={updateValueNeutral}
    onBadFeedback={updateValueBad}
    onResetFeedback={resetValue}
    />
    } */}
    
      {/* <button onClick={updateValueGood}>Good</button>
      <button onClick={updateValueNeutral}>Neutral</button>
      <button onClick={updateValueBad}>Bad</button>
      <button onClick={resetValue}>Reset</button> */}
      <Feedback
      goodFeedback = {values.good}
      neutralFeedback = {values.neutral}
      badFeedback = {values.bad}
      />
    </>
  )
}

export default App