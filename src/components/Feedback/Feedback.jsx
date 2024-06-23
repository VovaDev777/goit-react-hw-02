

const Feedback = ({good, neutral, bad}) => {
  let total = good+neutral+bad;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {total ? (Math.round((good / (total)) * 100)) : 0}%</li>
    </ul>
  )
}

export default Feedback