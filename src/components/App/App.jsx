import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
// import Options from "../Options/Options"
import { useState } from "react"

const App = () => {
  // const [clicksGood, setClicksGood] = useState(0);
  // const [clicksNeutral, setClicksNeutral] = useState(0);
  // const [clicksBad, setClicksBad] = useState(0);

   const [values, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
   });
  //  console.log(values.good);
   const updateValueGood = () => {
    setValue({...values, good: values.good + 1});
  };
  const updateValueNeutral = () => {
    setValue({...values, neutral: values.neutral + 1});
  };
  const updateValueBad = () => {
    setValue({...values, bad: values.bad + 1});
  };
  
  const resetValue = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
    <Description/>
    {/* <Options 
    good = {updateClickGood}
    /> */}
      <button onClick={updateValueGood}>Good</button>
      <button onClick={updateValueNeutral}>Neutral</button>
      <button onClick={updateValueBad}>Bad</button>
      <button onClick={resetValue}>Reset</button>
    <Feedback
    good = {values.good}
    neutral = {values.neutral}
    bad = {values.bad}
    />
    </>
  )
}

export default App