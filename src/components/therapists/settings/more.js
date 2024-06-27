import React, { useState } from "react";
import { languageSpoken } from "../../../utils/static-lists";
import "./more.css";

export default function More() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (event) => {
    const { value } = event.target;
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    } else if (selectedLanguages.length < 2) {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  return (
    <div className="container mt-3">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          {selectedLanguages.length > 0
            ? selectedLanguages.join(", ")
            : "Select languages"}
        </button>
        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
          {languageSpoken.map((language) => (
            <li key={language} className="dropdown-item">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={language}
                  value={language}
                  onChange={handleLanguageChange}
                  checked={selectedLanguages.includes(language)}
                />
                <label htmlFor={language} className="form-check-label">
                  {language}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
