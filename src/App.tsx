import "./App.css";
import Greet from "./components/greet/Greet";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";
import { AppProvider } from "./providers/AppProvider";
import MuiMode from "./components/mui-mode/MuiMode";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <AppProvider>
      <div className="App">
        {/* <Greet name="BigDamage" />
      <Application />
      <Skills skills={skills} />
      <Counter /> */}
        <MuiMode />
      </div>
    </AppProvider>
  );
}

export default App;
