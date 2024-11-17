// types.ts
export interface Timezone {
  id: string;
  name: string;
  offset: string;
  region: string;
}

// constants.ts
export const timezones: Timezone[] = [
  { id: "GMT", name: "Greenwich Mean Time", offset: "GMT+0", region: "Europe" },
  {
    id: "UTC",
    name: "Universal Coordinated Time",
    offset: "UTC+0",
    region: "Global",
  },
  {
    id: "EST",
    name: "Eastern Standard Time",
    offset: "UTC-5",
    region: "North America",
  },
  {
    id: "CST",
    name: "Central Standard Time",
    offset: "UTC-6",
    region: "North America",
  },
  {
    id: "MST",
    name: "Mountain Standard Time",
    offset: "UTC-7",
    region: "North America",
  },
  {
    id: "PST",
    name: "Pacific Standard Time",
    offset: "UTC-8",
    region: "North America",
  },
  {
    id: "IST",
    name: "India Standard Time",
    offset: "UTC+5:30",
    region: "Asia",
  },
  { id: "JST", name: "Japan Standard Time", offset: "UTC+9", region: "Asia" },
  {
    id: "AEST",
    name: "Australian Eastern Standard Time",
    offset: "UTC+10",
    region: "Australia",
  },
  {
    id: "CET",
    name: "Central European Time",
    offset: "UTC+1",
    region: "Europe",
  },
  { id: "BST", name: "British Summer Time", offset: "UTC+1", region: "Europe" },
  {
    id: "CST-CN",
    name: "China Standard Time",
    offset: "UTC+8",
    region: "Asia",
  },
  {
    id: "NZST",
    name: "New Zealand Standard Time",
    offset: "UTC+12",
    region: "Pacific",
  },
  {
    id: "BRT",
    name: "Brasilia Time",
    offset: "UTC-3",
    region: "South America",
  },
].sort((a, b) => a.name.localeCompare(b.name));

// TimezoneDropdown.tsx
import React, { useState, useMemo } from "react";
import { ChevronDown, Clock } from "lucide-react";
//   import { Timezone } from './types';
//   import { timezones } from './constants';

interface TimezoneDropdownProps {
  onChange?: (timezone: Timezone | null) => void;
  value?: Timezone | null;
  defaultValue?: Timezone | null;
  showCurrentTime?: boolean;
}

const TimezoneDropdown: React.FC<TimezoneDropdownProps> = ({
  onChange,
  value,
  defaultValue,
  showCurrentTime = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone | null>(
    defaultValue || null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentTimezone = value !== undefined ? value : selectedTimezone;

  const handleSelectTimezone = (timezone: Timezone) => {
    if (value === undefined) {
      setSelectedTimezone(timezone);
    }
    onChange?.(timezone);
    setIsOpen(false);
    setSearchQuery("");
  };

  const getCurrentTime = (timezone: Timezone): string => {
    const date = new Date();
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone.id === "GMT" ? "UTC" : timezone.id,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    } catch (error) {
      return "--:--";
    }
  };

  const filteredTimezones = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return timezones.filter(
      (tz) =>
        tz.name.toLowerCase().includes(query) ||
        tz.offset.toLowerCase().includes(query) ||
        tz.region.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-left bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {currentTimezone ? (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <div>
              <div className="font-medium">{currentTimezone.name}</div>
              <div className="text-sm text-gray-500">
                {currentTimezone.offset}
                {showCurrentTime && ` (${getCurrentTime(currentTimezone)})`}
              </div>
            </div>
          </div>
        ) : (
          <span className="text-gray-500">Select a timezone</span>
        )}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg overflow-hidden">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search timezones..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="max-h-60 overflow-auto" role="listbox">
            {filteredTimezones.map((timezone) => (
              <button
                key={timezone.id}
                onClick={() => handleSelectTimezone(timezone)}
                className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:outline-none focus:bg-blue-50"
                role="option"
                aria-selected={currentTimezone?.id === timezone.id}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{timezone.name}</span>
                  <span className="text-sm text-gray-500">
                    {timezone.offset} • {timezone.region}
                    {showCurrentTime && ` • ${getCurrentTime(timezone)}`}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimezoneDropdown;
