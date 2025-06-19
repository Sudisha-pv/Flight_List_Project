import React, { useState, useMemo } from "react";
import FlightCard from "../components/FlightCard";
import { FaFilter, FaSort } from "react-icons/fa";

const dummyFlights = [
  {
    name: "IndiGo",
    number: "6E-123",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    departureDate: "2025-06-20",
    arrivalDate: "2025-06-20",
    departureTime: "10:00",
    arrivalTime: "12:30",
    duration: "2.5",
    price: 4200,
  },
  {
    name: "SpiceJet",
    number: "SJ-901",
    departureCity: "Bangalore",
    arrivalCity: "Pune",
    departureDate: "2025-06-22",
    arrivalDate: "2025-06-22",
    departureTime: "07:00",
    arrivalTime: "09:00",
    duration: "2",
    price: 3500,
  },
  {
    name: "Air India",
    number: "AI-777",
    departureCity: "Chennai",
    arrivalCity: "Kolkata",
    departureDate: "2025-06-25",
    arrivalDate: "2025-06-25",
    departureTime: "09:30",
    arrivalTime: "12:00",
    duration: "2.5",
    price: 4900,
  },
];

const uniqueAirlines = [...new Set(dummyFlights.map((f) => f.name))];

function FlightList() {
  const [flights] = useState(dummyFlights);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minDuration, setMinDuration] = useState(0);
  const [maxDuration, setMaxDuration] = useState(5);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const handleAirlineChange = (e) => {
    const { value, checked } = e.target;
    setSelectedAirlines((prev) =>
      checked ? [...prev, value] : prev.filter((a) => a !== value)
    );
  };

  const filteredFlights = useMemo(() => {
    let result = flights.filter((flight) => {
      const priceMatch = flight.price >= minPrice && flight.price <= maxPrice;
      const durationMatch =
        parseFloat(flight.duration) >= minDuration &&
        parseFloat(flight.duration) <= maxDuration;
      const airlineMatch =
        selectedAirlines.length === 0 || selectedAirlines.includes(flight.name);

      return priceMatch && durationMatch && airlineMatch;
    });

    switch (sortBy) {
      case "priceLowHigh":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "durationLowHigh":
        result.sort((a, b) => a.duration - b.duration);
        break;
      case "durationHighLow":
        result.sort((a, b) => b.duration - a.duration);
        break;
      case "nameAZ":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameZA":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [flights, minPrice, maxPrice, minDuration, maxDuration, selectedAirlines, sortBy]);

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <FaFilter className="text-red-600" /> Available Flights
      </h2>

      {/* Filters */}
      <div className="bg-white border border-blue-200 rounded-lg p-4 mb-6 shadow-sm">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold mb-1">Price Range</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min"
              className="border p-1 rounded w-full mb-2"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="Max"
              className="border p-1 rounded w-full"
            />
          </div>

          {/* Duration Range */}
          <div>
            <label className="block text-sm font-semibold mb-1">Duration (Hours)</label>
            <input
              type="number"
              value={minDuration}
              onChange={(e) => setMinDuration(Number(e.target.value))}
              placeholder="Min"
              className="border p-1 rounded w-full mb-2"
            />
            <input
              type="number"
              value={maxDuration}
              onChange={(e) => setMaxDuration(Number(e.target.value))}
              placeholder="Max"
              className="border p-1 rounded w-full"
            />
          </div>

          {/* Airline Filter */}
          <div>
            <label className="block text-sm font-semibold mb-1">Airlines</label>
            {uniqueAirlines.map((airline) => (
              <div key={airline} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  value={airline}
                  onChange={handleAirlineChange}
                  className="accent-red-600"
                />
                <label className="text-sm text-gray-700">{airline}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className="flex justify-end mb-4">
        <select
          className="border border-blue-300 p-2 rounded focus:outline-none text-sm"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="durationLowHigh">Duration: Short to Long</option>
          <option value="durationHighLow">Duration: Long to Short</option>
          <option value="nameAZ">Flight Name: A-Z</option>
          <option value="nameZA">Flight Name: Z-A</option>
        </select>
      </div>

      {/* Flight Cards */}
      {filteredFlights.length > 0 ? (
        <div className="grid gap-4">
          {filteredFlights.map((flight, idx) => (
            <FlightCard key={idx} flight={flight} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No flights match your filters.</p>
      )}
    </div>
  );
}

export default FlightList;
