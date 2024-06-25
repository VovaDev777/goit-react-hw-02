import css from "./Options.module.css"

const Options = ({good, neutral, bad, reset}) => {
  // const arrayBtn = ['good', 'neutral', 'bad']
  return (
    <div className={css.btnCon}>
      {/* {arrayBtn.map(btn => <button type={btn} onClick={() => handler(btn)} key={btn}>{btn}</button>)} */}
      <button className={`${css.btn}`} onClick={good}>Good</button>
      <button className={`${css.btn} ${css.neutral}`} onClick={neutral}>Neutral</button>
      <button className={`${css.btn} ${css.bad}`} onClick={bad}>Bad</button>
      <button className={`${css.btn} ${css.reset}`} onClick={reset}>Reset</button>
    </div>
  )
}

export default Options