import Button from "./Button";
import PassportToDestination from "./PassportToDestination";

const StampModal = ({ isOpen, onClose, country, origin }) => {
  if (!isOpen) return null;

  return (
    <dialog
      open={isOpen}
      className="stamp-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="stamp-modal">
        <div className="heading">
          <h1>{country}</h1>
          <a
            href={`https://www.google.com/maps/search/${country}`}
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

        <PassportToDestination country={country} origin={origin} />

        <div className="notes">
          <h3>Notes:</h3>
          <textarea />
        </div>

        {/* <Button name="View Photo Album" /> */}
      </div>
    </dialog>
  );
};

export default StampModal;
