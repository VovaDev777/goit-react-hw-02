

const Options = ({good}) => {
  
  return (
    <div>
      <button onClick={good}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  )
}

export default Options