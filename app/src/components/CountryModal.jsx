import Button from "./Button";

const CountryModal = ({ isOpen, onClose, country }) => {
  if (!isOpen) return null;

  return (
    <dialog className="country-modal-overlay">
      <Button name="❌" onClick={onClose} />

      <h1>{country.name}</h1>

      <ul>
        <li>Capital: {country.capital}</li>
        <li>Subregion: {country.subregion}</li>
        <li>Region: {country.region}</li>
        <li>Continent: {country.continent}</li>
        <li>Currency: {country.currency}</li>
        <li>Language: {country.language}</li>
        <li>Calling Code: {country.callingCode}</li>
      </ul>

      <img src={country.flag.png} alt={country.flag.alt} />

      <iframe src="" alt="Google Maps"></iframe>
    </dialog>
  );
};

export default CountryModal;
