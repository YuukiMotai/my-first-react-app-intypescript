import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'

 //type MySetStateAction = number | ((prevState: number) => number);
 //type Dispatch = (value: number | ((prevState: number) => number)) => void;
 //const array: Array<number> = [1,2,3];
 //const readonlyarray: ReadonlyArray<number> = [1,2,3];
 //readonlyarray[0] = 11;


const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1
  });

  return (
    <>
      <p>value: {count}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </p>
      <p>
        This component was re-renderd {renderTimes.current} times.
      </p>
    </>
  );
};

export default Counter;
