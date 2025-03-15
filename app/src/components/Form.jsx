import Button from "./Button";

const Form = ({ children, name }) => {
  return (
    <form>
      {children}

      <label>Username</label>
      <input type="text" placeholder="Username" required />

      <label>Password</label>
      <input type="password" placeholder="Password" required />

      <Button name={name} onClick={handleSubmit} />
    </form>
  );
};

export default Form;
