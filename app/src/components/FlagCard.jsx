const FlagCard = ({ name, src, alt, onClick, flag }) => {
  return (
    <div 
      className="flag-card" 
      onClick={() => {
        console.log('FlagCard clicked:', name);
        onClick(flag);
      }}
    >
      <img src={src} alt={alt} />
      <h3>{name}</h3>
    </div>
  );
};

export default FlagCard;
