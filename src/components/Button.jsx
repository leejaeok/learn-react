import React from "react";

const Button = ({ onButtonClick }) => {
  const handleClick = () => {
    const userName = window.prompt("이름을 입력해주세요.");
    // console.log("🚀 ~ handleClick ~ userName:", userName);

    onButtonClick(userName);
  };

  return (
    <div style={{ backgroundColor: "orange", padding: "12px" }}>
      <button type="button" onClick={handleClick}>
        이름 변경하기
      </button>
    </div>
  );
};

export default Button;
