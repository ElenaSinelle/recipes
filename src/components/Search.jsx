import { useState } from "react";

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={handleChange}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}
