import "../index.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import CreateQuestion from "./Home/CreateQuestion";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions/create" element={<CreateQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}
