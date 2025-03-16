import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Homepage = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleClick = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>Bon Voyage!</li>
          <li>
            <Button name={"Login"} onClick={() => handleClick("login")} />
          </li>
          <li>
            <Button name={"Signup"} onClick={() => handleClick("signup")} />
          </li>
        </ul>
      </nav>

      <div>
        <p>Keep track of where you've been.</p>
        <p>Plan where you'll go.</p>
        <p>And bon voyage! ✈️</p>
      </div>

      <div>
        {activeForm === "login" && <LoginForm />}
        {activeForm === "signup" && <SignupForm />}
        {!activeForm && (
          <img src="" alt="passport cover" className="passport-home" />
        )}
      </div>
    </div>
  );
};

export default Homepage;
