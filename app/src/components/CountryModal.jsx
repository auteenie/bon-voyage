import Button from "./Button";

const CountryModal = ({ isOpen, onClose, country }) => {
  console.log('Modal country data:', country); // Debug the data structure
  if (!isOpen || !country) return null;

  return (
    <dialog 
      open={isOpen}
      className="country-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <Button name="❌" onClick={onClose} />
        <h1>{country.name?.common}</h1>
        
        <ul>
          <li>Capital: {country.capital?.[0] || 'Not Available'}</li>
          <li>Region: {country.region || 'Not Available'}</li>
          <li>Subregion: {country.subregion || 'Not Available'}</li>
          <li>Languages: {Object.values(country.languages || {}).join(', ') || 'Not Available'}</li>
          <li>Currency: {Object.values(country.currencies || {}).map(curr => `${curr.name} (${curr.symbol})`).join(', ') || 'Not Available'}</li>
          <li>Population: {country.population || 'Not Available'}</li>
          <li>Area: {country.area || 'Not Available'} square kilometers</li>
          <li>Timezones: {country.timezones[0] || 'Not Available'}</li>
          <li>Map: <a href={`https://www.google.com/maps/search/${country.name?.common}`} target="_blank" rel="noopener noreferrer">View on Google Maps</a></li>
          
        </ul>

        <img 
          src={country.flags?.png} 
          alt={country.flags?.alt || `Flag of ${country.name?.common}`} 
        />
      </div>
    </dialog>
  );
};

export default CountryModal;
