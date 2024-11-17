// types.ts
export interface Country {
  code: string;
  name: string;
  flag: string;
}

// CountryDropdown.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
//   import { Country } from './types';

interface CountryDropdownProps {
  onChange?: (country: Country | null) => void;
  value?: Country | null;
  defaultValue?: Country | null;
}

const countries: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
].sort((a, b) => a.name.localeCompare(b.name));

const CountryDropdown: React.FC<CountryDropdownProps> = ({
  onChange,
  value,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    defaultValue || null
  );

  const currentCountry = value !== undefined ? value : selectedCountry;

  const handleSelectCountry = (country: Country) => {
    if (value === undefined) {
      setSelectedCountry(country);
    }
    onChange?.(country);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-left bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {currentCountry ? (
          <span className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">
              {currentCountry.flag}
            </span>
            <span>{currentCountry.name}</span>
          </span>
        ) : (
          <span className="text-gray-500">Select a country</span>
        )}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => handleSelectCountry(country)}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:outline-none focus:bg-blue-50 flex items-center gap-2"
              role="option"
              aria-selected={currentCountry?.code === country.code}
            >
              <span className="text-xl" aria-hidden="true">
                {country.flag}
              </span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
