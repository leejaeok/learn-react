import React, { useEffect, useState } from "react";

const Counter = () => {
  // count: 현재 숫자 상태값
  // setCount: count 값을 변경하는 함수
  // useState(0): count의 초기값을 0으로 설정
  const [count, setCount] = useState(0);

  const add = () => {
    // prevCount는 변경 전 count 값
    // 이전 값에 1을 더해서 새로운 count 값으로 저장
    setCount(count + 1);
    console.log("🚀 ~ add ~ count:", count);
    // setCount((prevCount) => prevCount + 1);
  };

  const minus = () => {
    setCount((prevCount) => {
      console.log("🚀 ~ minus ~ prevCount:", prevCount);
      return prevCount - 1;
    });
  };

  // state 변경을 감지
  useEffect(() => {
    // count 값이 변경됐을떄 실행됨
    console.log("🚀 ~ useEffect ~ count:", count);
  }, [count]);

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

export default Counter;
