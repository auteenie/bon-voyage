const FlagCard = ({ name, src, alt, onClick }) => {
  return (
    <div className="flag-card" onClick={onClick}>
      <img src={src} alt={alt} />
      <h3>{name}</h3>
    </div>
  );
};

export default FlagCard;
