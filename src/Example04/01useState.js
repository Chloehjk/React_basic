import React, { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);
  const plusOne = () => {
    setNum(num + 1)
  };
  const minusOne = () => {
    setNum(num - 1)
  };

 return(
    <>
    <div>
      <h3>counter</h3>
      <h4>값 : {num}</h4>
    </div>
    <button onClick={plusOne}>+</button>
    <button onClick={minusOne}>-</button>
    </>
  );
};