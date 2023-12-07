import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todo from "./pages/Todo";
import Calculator from "./pages/Calculator";
import Clock from "./pages/Clock";
import Weather from "./pages/Weather";

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
