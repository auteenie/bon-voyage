import { useState } from "react";

const Filter = ({ menu, onSelect }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <select className="filter" value={selected} onChange={handleChange}>
      <option value="">Show All</option>
      {menu.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;
