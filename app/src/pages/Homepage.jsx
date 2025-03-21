import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";

const Homepage = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = (formType) => {
    setActiveForm(formType);
  };

  const handleSubmit = (data) => {
    if (activeForm === "signup") {
      const newUser = {
        ...data,
        id: "user-" + Math.random().toString(36).substr(2, 9),
      };
      
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      navigate(`/pages/PassportPage/${newUser.id}`);
    } else if (activeForm === "login") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        user => user.username === data.username && user.password === data.password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate(`/pages/PassportPage/${user.id}`);
      } else {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <main className="home">
      <nav className="home-nav">
        <div className="nav-left">
          <Link to="/" className="appName">bon voyage</Link>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <Button name={"Login"} onClick={() => handleClick("login")} />
          <Button name={"Sign Up"} onClick={() => handleClick("signup")} />
        </div>
      </nav>

      <div className="home-content">
        <section className="home-intro">
          {error && <p style={{color: "red"}}>{error}</p>}
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
