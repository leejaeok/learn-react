import React, { useState } from "react";

const Counter2 = () => {
  // count: 현재 숫자 상태값
  // setCount: count 값을 변경하는 함수
  // useState(0): count의 초기값을 0으로 설정
  // let count = 0;
  const [count, chgCount] = useState(0);

  const add = () => {
    // count += 1;
    // console.log(count);
    chgCount((dd) => dd + 1);
  };

  const minus = () => {
    // count -= 1;
    chgCount((dd) => dd - 1);
  };

  return (
    <div style={{ backgroundColor: "pink", padding: "12px" }}>
      Counter
      <div>{count}</div>
      <button type="button" onClick={add}>
        ➕
      </button>
      <button type="button" onClick={minus}>
        ➖
      </button>
    </div>
  );
};

export default Counter2;
