import Navbar from "./components/Navbar";
import Home from "./page/Home";
//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
