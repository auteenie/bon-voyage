import { useState, useEffect } from "react";
import CouldNotLoadData from "../pages/CouldNotLoadData";
import FlagCard from "./FlagCard";

const FlagsList = ({ flags, onClick }) => {
  return (
    <div>
      {flags.length ? (
        flags.map((flag, i) => (
          <FlagCard
            key={i}
            name={flag?.name?.common || "Unknown Country"}
            src={flag?.flags?.png}
            alt={flag?.flags?.alt || "No Flag Available"}
            onClick={() => onClick(flag)}
            flag={flag}
          />
        ))
      ) : (
        <p className="no-countries">Are you sure that's on Earth?</p>
      )}
    </div>
  );
};

export default FlagsList;
