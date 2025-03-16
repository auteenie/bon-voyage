import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import PassportPage from "./pages/PassportPage";
import CountriesPage from "./pages/CountriesPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pages/SignupForm" element={<SignupForm />} />
      <Route path="/pages/LoginForm" element={<LoginForm />} />
      <Route path="/pages/PassportPage" element={<PassportPage />} />
      <Route path="/pages/CountriesPage" element={<CountriesPage />} />
    </Routes>
  );
}

export default App;
