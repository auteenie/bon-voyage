import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "../components/Button";

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
    <main className="home">
      <nav className="home-nav">
        <div className="nav-left">
          <Link to="/" className="appName">bon voyage</Link>
        </div>
        <div className="nav-right">
          <Button name={"Login"} onClick={() => handleClick("login")} />
          <Button name={"Sign Up"} onClick={() => handleClick("signup")} />
        </div>
      </nav>

      <div className="home-content">
        <section className="home-intro">
          <p>Keep track of where you have been.</p>
          <p>Plan where you will go.</p>
          <p>And <em>bon voyage!</em> ✈️</p>
        </section>

        <div className="passport-section">
          {activeForm === "login" && <LoginForm onSubmit={handleSubmit} />}
          {activeForm === "signup" && <SignupForm onSubmit={handleSubmit} />}
          {!activeForm && (
            <img
              src="/passport-cover.png"
              alt="passport cover"
              className="passport-cover"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Homepage;
