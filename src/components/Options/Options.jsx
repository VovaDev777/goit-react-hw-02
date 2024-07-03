import css from "./Options.module.css"

const Options = ({ onButtonClick, onResetFeedback, isAnyFeedback}) => {
  // const resetBtn = "<button className={`${css.btn} ${css.reset}`} onClick={onResetFeedback}>Reset</button>";
  return (
    <div className={css.btnCon}>
      <button className={`${css.btn}`} onClick={onButtonClick} name="good">Good</button>
      <button className={`${css.btn} ${css.neutral}`} onClick={onButtonClick} name="neutral">Neutral</button>
      <button className={`${css.btn} ${css.bad}`} onClick={onButtonClick} name="bad">Bad</button>
      {isAnyFeedback ? 
      <button 
      className={`${css.btn} ${css.reset}`} 
      onClick={onResetFeedback}>Reset</button> : 
      <></>}
      
    </div>
  )
}

export default Options