import Lesson1 from "./components/lesson1";
import "./App.css";
const nameUser = "Azizbek";
function App() {
  return (
    <div className="App">
      <Lesson1 name={nameUser} />
    </div>
  );
}

export default App;
