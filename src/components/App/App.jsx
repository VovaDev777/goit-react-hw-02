import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import Notification from "../Notification/Notification"
import { useState, useEffect } from "react"
import 'normalize.css';


const App = () => {

   const [values, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
   });
  //  console.log(values);

   useEffect(() => {

   }, [])

   
  const updateValueGood = () => {
    setValue({...values, good: values.good + 1})
  };
  const updateValueNeutral = () => {
    setValue({...values, neutral: values.neutral + 1})
  };
  const updateValueBad = () => {
    setValue({...values, bad: values.bad + 1})
  };
  
  const resetValue = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.clear();
  }
  // {total ? (Math.round((goodFeedback / (total)) * 100)) : 0}
  let total = values.good+values.bad+values.neutral;
  let posiveFeedback = (Math.round((values.good / (total)) * 100));
  console.log(total)
  return (
    <>
      <Description/>
      <Options 
        onGoodFeedback={updateValueGood}
        onNeutralFeedback={updateValueNeutral}
        onBadFeedback={updateValueBad}
        onResetFeedback={resetValue}
      />
      {total > 0 ? 
      <Feedback
        goodFeedback = {values.good}
        neutralFeedback = {values.neutral}
        badFeedback = {values.bad}
        percentOfGoodFb = {posiveFeedback}
        totalFeedback = {total}
      /> : <Notification/> }
      
    </>
  )
}

export default App