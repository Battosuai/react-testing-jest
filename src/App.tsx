import "./App.css";
import Greet from "./components/greet/Greet";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <div className="App">
      <Greet name="BigDamage" />
      <Application />
      <Skills skills={skills} />
      <Counter />
    </div>
  );
}

export default App;
