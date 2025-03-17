import Button from "./Button";

const CountryModal = ({ isOpen, onClose, country }) => {
  if (!isOpen || !country) return null;

  // Destructure the country data safely
  const {
    name = {},          // Handle nested name object
    flags = {},         // Handle nested flags object
    capital = [],       // Capital is usually an array
    region = '',
  } = country;

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
        
        {/* Safely access nested properties */}
        <h1>{name.common || 'Country Name Not Available'}</h1>
        
        <ul>
          <li>Capital: {capital[0] || 'Not Available'}</li>
          <li>Region: {region || 'Not Available'}</li>
        </ul>

        <img 
          src={flags.png} 
          alt={flags.alt || `Flag of ${name.common}`} 
        />
      </div>
    </dialog>
  );
};

export default CountryModal;
