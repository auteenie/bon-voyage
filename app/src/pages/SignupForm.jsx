const SignupForm = () => {
  return (
    <Form name={"Sign Up"}>
      <label>First Name</label>
      <input type="text" placeholder="First Name" />

      <label>Last Name</label>
      <input type="text" placeholder="Last Name" />

      <label>Email Address</label>
      <input type="email" placeholder="Email Address" required />
    </Form>
  );
};

export default SignupPage;
