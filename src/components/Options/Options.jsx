import css from "./Options.module.css"

const Options = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback, onResetFeedback}) => {
  // const arrayBtn = ['good', 'neutral', 'bad']
  return (
    <div className={css.btnCon}>
      {/* {arrayBtn.map(btn => <button type={btn} onClick={() => handler(btn)} key={btn}>{btn}</button>)} */}
      <button className={`${css.btn}`} onClick={onGoodFeedback}>Good</button>
      <button className={`${css.btn} ${css.neutral}`} onClick={onNeutralFeedback}>Neutral</button>
      <button className={`${css.btn} ${css.bad}`} onClick={onBadFeedback}>Bad</button>
      <button className={`${css.btn} ${css.reset}`} onClick={onResetFeedback}>Reset</button>
    </div>
  )
}

export default Options