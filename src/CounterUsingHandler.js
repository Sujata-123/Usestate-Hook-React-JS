import React, { useState } from 'react';
const CounterUsingHandler = () => {
  const [count1, setCount1] = useState(0);
  const handlerIncrement = () => {
    setCount1(count1 + 1);
  };
  const handlerConstant = () => {
    setCount1(0);
  };
  const handlerDecrement = () => {
    setCount1(count1 - 1);
  };
  return (
    <div>
      The count is :{count1}
      <button onClick={handlerIncrement}>Increment</button>
      <button onClick={handlerConstant}>Constant</button>
      <button onClick={handlerDecrement}>Decrement</button>
    </div>
  );
};
export default CounterUsingHandler;
