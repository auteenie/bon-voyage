import Form from "../components/Form";

const SignupForm = () => {
  const handleSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    console.log(`User data saved: ${data}`);
  };

  return (
    <Form name={"Sign Up"} onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" placeholder="First Name" />

      <label>Last Name</label>
      <input type="text" placeholder="Last Name" />

      <label>Email Address</label>
      <input type="email" placeholder="Email Address" required />
    </Form>
  );
};

export default SignupForm;
