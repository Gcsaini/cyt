import React, { useState } from "react";
import { languageSpoken } from "../../../utils/static-lists";

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
    <>
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
          <ul
            className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
            style={{
              width: "200px",
              overflowY: "auto",
              fontSize: "15px"
            }}
          >
            {languageSpoken.map((language) => (
              <li key={language}>
                <input
                  type="checkbox"
                  id={language}
                  value={language}
                  onChange={handleLanguageChange}
                  checked={selectedLanguages.includes(language)}
                />
                <label htmlFor={language} className="ml-2">
                  {language}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
