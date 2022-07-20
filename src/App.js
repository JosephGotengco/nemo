import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Character, Landing } from "./pages";

export const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/character/:name" strict caseSensitive element={<Character />} />
    </Routes>
  </div>
);
