const PassportPage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <h1>Welcome, {userData?.firstName}!</h1>
      <img
        src={`/assets/${userData?.country}.png`}
        alt={`${userData?.country} Passport Cover`}
      />
    </div>
  );
};

export default PassportPage;
