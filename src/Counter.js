import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // 이 함수는 render 가 마치고 난 다음에 실행됩니다!
    console.log('rendered:', value);
  }, [value]);//value 값이 바뀔때만 useEffect호출

  console.log('rendering: ', value);

  return (
    <div>
      <p>
        <b>{value}</b>번 누르셨습니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;