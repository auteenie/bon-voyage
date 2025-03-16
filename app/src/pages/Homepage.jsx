import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Homepage = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleClick = (formType) => {
    setActiveForm(formType);
  };

  const handleSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    console.log(`Data saved to localStorage: ${data}`);
  };

  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Bon Voyage!</Link>
          <li>
            <Button name={"Login"} onClick={() => handleClick("login")} />
          </li>
          <li>
            <Button name={"Signup"} onClick={() => handleClick("signup")} />
          </li>
        </ul>
      </nav>

      <div>
        <p>Keep track of where you have been.</p>
        <p>Plan where you will go.</p>
        <p>
          And <em>bon voyage!</em> ✈️
        </p>
      </div>

      <div>
        {activeForm === "login" && <LoginForm onSubmit={handleSubmit} />}
        {activeForm === "signup" && <SignupForm onSubmit={handleSubmit} />}
        {!activeForm && (
          <img src="" alt="passport cover" className="passport-home" />
        )}
      </div>
    </div>
  );
};

export default Homepage;
