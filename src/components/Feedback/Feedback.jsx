import css from "./Feedback.module.css"

const Feedback = ({goodFeedback, neutralFeedback, badFeedback, percentOfGoodFb, totalFeedback}) => {
  
  return (
    <ul className={css.list}>
      <li>Good: {goodFeedback}</li>
      <li>Neutral: {neutralFeedback}</li>
      <li>Bad: {badFeedback}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {totalFeedback ? percentOfGoodFb : 0}%</li>
    </ul>
  )
}

export default Feedback