import Button from "./Button";
import PassportToDestination from "./PassportToDestination";

const StampModal = ({ country, onClose }) => {
  return (
    <dialog className="stamp-modal">
      <div className="heading">
        <h1>{country.name.common}</h1>
        <a
          href={`https://www.google.com/maps/search/${country.name?.common}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <Button name="❌" onClick={onClose} />
      </div>

      <div className="">
        <h3>Spots You Have Explored:</h3>
        <textarea />
      </div>

      <div className="wishlist">
        <h3>Wishlist of Checkpoints:</h3>
        <textarea />
      </div>

      <PassportToDestination />
      {/* 1. Need to pass in the userData's origin country's code and the code of the country that's being currently clicked on.
      2. This way this automatically shows the visa requirements without too much functionality */}

      <div className="notes">
        <h3>Notes:</h3>
        <textarea />
      </div>

      <Button name="View Photo Album" />
    </dialog>
  );
};

export default StampModal;
