import React, { useState } from 'react';
import ReactDOM from 'react-dom'

 //type MySetStateAction = number | ((prevState: number) => number);
 type Dispatch = (value: number | ((prevState: number) => number)) => void;

const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <p>value: {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </p>
  );
};

export default Counter;
