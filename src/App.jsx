import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Todo from "./pages/TodoList/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Clock from "./pages/Clock/ClockPage";
import Weather from "./pages/Weather/Weather";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/todoList" element={<Todo />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </>
  );
}

export default App;
