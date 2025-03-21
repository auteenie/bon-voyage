import { useState } from "react";
import Button from "./Button";

const Form = ({ children, name, onSubmit }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "Sign Up") {
      onSubmit(formData);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      {children}

      <label
        className={name === "Sign Up" ? "signup" : "login"}
        aria-label="username"
      >
        Username:{" "}
      </label>
      <input
        type="text"
        name="username"
        className={name === "Sign Up" ? "signup" : "login"}
        aria-label="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
    
      <label
        className={name === "Sign Up" ? "signup" : "login"}
        aria-label="password"
      >
        Password:{" "}
      </label>
      <input
        type="password"
        name="password"
        className={name === "Sign Up" ? "signup" : "login"}
        aria-label="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
    
      <Button name={name} />
    </form>
  );
};

export default Form;
