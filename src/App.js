import "./App.css";
import Title from "./components/title/Title";
import Weather from "./components/weather/Weather";
import InputBox from "./components/inputbox/InputBox";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="inner-container">
        <Weather />
        <InputBox />
      </div>
    </div>
  );
}

export default App;
