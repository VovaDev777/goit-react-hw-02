import css from "./Feedback.module.css"

const Feedback = ({goodFeedback, neutralFeedback, badFeedback}) => {
  let total = goodFeedback+neutralFeedback+badFeedback;
  return (
    <ul className={css.list}>
      <li>Good: {goodFeedback}</li>
      <li>Neutral: {neutralFeedback}</li>
      <li>Bad: {badFeedback}</li>
      <li>Total: {total}</li>
      <li>Positive: {total ? (Math.round((goodFeedback / (total)) * 100)) : 0}%</li>
    </ul>
  )
}

export default Feedback