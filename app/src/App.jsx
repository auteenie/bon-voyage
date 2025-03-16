import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import PassportPage from "./pages/PassportPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pages/SignupForm" element={<SignupForm />} />
        <Route path="/pages/LoginForm" element={<LoginForm />} />
        <Route path="/pages/PassportPage" element={<PassportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
