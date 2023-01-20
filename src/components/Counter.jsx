import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0)

  function plusCounter() {
    setCount(count - 1)
  }

  function minusCounter() {
    setCount(count + 1)
  }

  return (
    <div className="counter">
      <button className="counter-minus" onClick={plusCounter}>-</button>
      <div className="counter-count">
        <h1>{count}</h1>
      </div>
      <button className="counter-plus" onClick={minusCounter}>+</button>
    </div>
  )
}
