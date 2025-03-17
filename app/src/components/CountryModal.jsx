import Button from "./Button";

const CountryModal = ({
  isOpen,
  onClose,
  countryName,
  capital,
  subregion,
  region,
  continent,
  currency,
  language,
  callingCode,
  flag,
}) => {
  if (!isOpen) return null;

  return (
    <dialog className="country-modal-overlay">
      <Button name="❌" onClick={onClose} />

      <h1>{countryName}</h1>

      <ul>
        <li>Capital: {capital}</li>
        <li>Subregion: {subregion}</li>
        <li>Region: {region}</li>
        <li>Continent: {continent}</li>
        <li>Currency: {currency}</li>
        <li>Language: {language}</li>
        <li>Calling Code: {callingCode}</li>
      </ul>

      <img src={flag.png} alt={flag.alt} />

      <iframe src="" alt="Google Maps"></iframe>
    </dialog>
  );
};

export default CountryModal;
