import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import { useState } from "react"

const App = () => {
  const [clicksGood, setClicksGood] = useState(0);
  const [clicksNeutral, setClicksNeutral] = useState(0);
  const [clicksBad, setClicksBad] = useState(0);

  return (
    <>
    <Description/>
    <Options/>
    <Feedback/>
    </>
  )
}

export default App