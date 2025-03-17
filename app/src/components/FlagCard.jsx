const FlagCard = ({ name, src, alt }) => {
  return (
    <div className="flag-card">
      <img src={src} alt={alt} />
      <h3>{name}</h3>
    </div>
  );
};

export default FlagCard;
