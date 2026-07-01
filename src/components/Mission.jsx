import React from "react";

const Mission = ({ userName = "사용자" }) => {
  return (
    <>
      <div id="greeting">
        <h1> {userName}님 안녕?</h1>
        <p>오늘도 행복한 하루되세요!!</p>
      </div>
      <div>test</div>
    </>
  );
};

export default Mission;
