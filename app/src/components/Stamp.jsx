const Stamp = ({ country, stampSrc, isVisited }) => {
  return (
    <img 
      className={`stamp ${isVisited ? 'visited' : ''}`} 
      src={stampSrc} 
      alt={`${country} stamp`} 
    />
  );
};

export default Stamp; 