import "./App.css";
import Greet from "./components/greet/Greet";
import Application from "./components/application/Application";

function App() {
  return (
    <div className="App">
      <Greet name="BigDamage" />
      <Application />
    </div>
  );
}

export default App;
