import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Nav from "./Nav";
import { ListUser } from "./ListUser";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<ListUser />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      ;
    </>
  );
}

export default App;
