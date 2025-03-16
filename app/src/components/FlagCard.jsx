const FlagCard = ({ name, src, alt }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={src} alt={alt} />
    </div>
  );
};

export default FlagCard;
