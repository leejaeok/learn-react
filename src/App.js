import Title from "./components/Title";
import Greeting from "./components/Mission";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { useEffect, useState } from "react";
// import Counter2 from "./components/Counter2";

function App() {
  const [userName, setUserName] = useState("");

  // state 변경을 감지
  useEffect(() => {
    // count 값이 변경됐을떄 실행됨
    console.log("🚀 ~ useEffect ~ userName:", userName);
  }, [userName]);

  const handleButtonClick = (data) => {
    // console.log(data);
    setUserName(data);
  };

  return (
    <div className="App">
      Hello React
      <Title />
      {/* <Title />
      <Title />
      <Title /> */}
      {/* 미션: Greeting 컴포넌트 가져와서 보여주기 */}
      <Greeting userName={userName} />
      <Button onButtonClick={handleButtonClick} />
      <Greeting userName="옥" />
      <Counter chgCount="1" />
      <Counter chgCount="5" />
      {/* <Counter2 /> */}
    </div>
  );
}

export default App;
