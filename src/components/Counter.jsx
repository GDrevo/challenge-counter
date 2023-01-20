import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0)

  function plusCounter() {
    setCount(prevCount => prevCount + 1)
  }

  function minusCounter() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="counter">
      <button className="counter-minus" onClick={minusCounter}>-</button>
      <div className="counter-count">
        <h1>{count}</h1>
      </div>
      <button className="counter-plus" onClick={plusCounter}>+</button>
    </div>
  )
}
