

const Options = ({good, handler}) => {
  const arrayBtn = ['good', 'neutral', 'bad']
  return (
    <div>
      {arrayBtn.map(btn => <button type={btn} onClick={() => handler(btn)} key={btn}>{btn}</button>)}
      {/* <button onClick={good}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button> */}
    </div>
  )
}

export default Options