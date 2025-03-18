import Button from "./Button";

const CountryModal = ({ isOpen, onClose, country }) => {
  console.log("Modal country data:", country); // Debug the data structure
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
        <div className="modal-text">
          <ul>
            <li>
              <strong>Capital:</strong>{" "}
              {country.capital?.[0] || "Not Available"}
            </li>
            <li>
              <strong>Region:</strong> {country.region || "Not Available"}
            </li>
            <li>
              <strong>Subregion:</strong> {country.subregion || "Not Available"}
            </li>
            <li>
              <strong>Languages:</strong>{" "}
              {Object.values(country.languages || {}).join(", ") ||
                "Not Available"}
            </li>
            <li>
              <strong>Currency:</strong>{" "}
              {Object.values(country.currencies || {})
                .map((curr) => `${curr.name} (${curr.symbol})`)
                .join(", ") || "Not Available"}
            </li>
            <li>
              <strong>Population:</strong>{" "}
              {country.population || "Not Available"}
            </li>
            <li>
              <strong>Area:</strong> {country.area || "Not Available"} square
              kilometers
            </li>
            <li>
              <strong>Timezones:</strong>{" "}
              {country.timezones[0] || "Not Available"}
            </li>
            <li>
              <strong>Map:</strong>{" "}
              <a
                href={`https://www.google.com/maps/search/${country.name?.common}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
          </ul>

          <img
            src={country.flags?.png}
            alt={country.flags?.alt || `Flag of ${country.name?.common}`}
          />
        </div>
      </div>
    </dialog>
  );
};

export default CountryModal;
