import React, { useState } from "react";
import { languageSpoken } from "../../../utils/static-lists";

export default function More() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (event) => {
    const { value } = event.target;
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    } else if (selectedLanguages.length < 2) {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };
  // console.log(selectedLanguages);

  return (
    <div className="container mt-3">
      <h4>Select Languages</h4>
      <select
        className="form-select"
        multiple
        value={selectedLanguages}
        onChange={handleLanguageChange}
        style={{ height: "150px", overflowY: "auto", fontSize: "15px" }} // Inline styles for height and scrolling
      >
        {languageSpoken.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <div className="mt-3">
        <h5>Selected Languages:</h5>
        {selectedLanguages.length > 0 ? (
          <ul className="list-group">
            {selectedLanguages.map((language) => (
              <li key={language} className="list-group-item">
                {language}
              </li>
            ))}
          </ul>
        ) : (
          <p>No languages selected.</p>
        )}
      </div>
    </div>
  );
}
