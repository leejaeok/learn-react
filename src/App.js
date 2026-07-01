import Title from "./components/Title";
import Greeting from "./components/Mission";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      Hello React
      <Title />
      {/* <Title />
      <Title />
      <Title /> */}
      {/* 미션: Greeting 컴포넌트 가져와서 보여주기 */}
      <Greeting name="옥" />
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
