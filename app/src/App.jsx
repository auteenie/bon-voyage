import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import PassportPage from "./pages/PassportPage";
import CountriesPage from "./pages/CountriesPage";
import CouldNotLoadData from "./pages/CouldNotLoadData";
import "./App.css";
import { useTheme } from './context/ThemeContext';

function App() {
  const { colors } = useTheme();

  return (
    <div style={{ 
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh'
    }}>
      <style>
        {`
          a {
            color: ${colors.anchor};
          }
        `}
      </style>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pages/SignupForm" element={<SignupForm />} />
        <Route path="/pages/LoginForm" element={<LoginForm />} />
        <Route path="/pages/PassportPage/:userID" element={<PassportPage />} />
        <Route path="/pages/CountriesPage" element={<CountriesPage />} />
        <Route path="*" element={<CouldNotLoadData />} />
      </Routes>
    </div>
  );
}

export default App;
  