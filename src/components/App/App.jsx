import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import Notification from "../Notification/Notification"
import { useState, useEffect } from "react"
import 'normalize.css';


const App = () => {

   const [values, setValue] = useState(() => {
    const savedFb = localStorage.getItem("feedback");

    if (savedFb !== null) {
      return JSON.parse(savedFb)
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
   });

   useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(values))
   }, [values])

   
   const updateValueGood = (event) => {
    const type = event.target.name;
    
    setValue({...values, [type]: values[type] + 1})

   }
  
  const resetValue = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.clear();
  }

  let total = values.good+values.bad+values.neutral;
  let posiveFeedback = (Math.round((values.good / (total)) * 100));
  const isAnyFeedback = total > 0;
  
  return (
    <>
      <Description/>
      <Options 
        onButtonClick = {updateValueGood}
        onResetFeedback={resetValue}
        isAnyFeedback = {isAnyFeedback}
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


// function a() {

// }

// const a = () => {

// }

// const b = function () {

// }