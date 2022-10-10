import { Routes, Route } from "react-router-dom";
import "./App.css";
import ItemScreen from "./screens/ItemScreen";
import Home from "./screens/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name/:lat/:long" element={<ItemScreen />} />
      </Routes>
    </div>
  );
}

export default App;
