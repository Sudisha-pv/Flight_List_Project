import React from "react";
import { FaRupeeSign, FaClock } from "react-icons/fa";

function FlightCard({ flight }) {
  return (
    <div className="bg-white rounded-lg border border-blue-100 p-4 shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-lg font-semibold text-blue-800">{flight.name}</h3>
          <p className="text-sm text-gray-500">Flight No: {flight.number}</p>
        </div>
        <div className="text-red-600 text-lg font-bold flex items-center gap-1">
          <FaRupeeSign /> {flight.price}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-700">
        <p><strong>From:</strong> {flight.departureCity}</p>
        <p><strong>To:</strong> {flight.arrivalCity}</p>
        <p><strong>Date:</strong> {flight.departureDate}</p>
        <p className="flex items-center gap-1">
          <FaClock /> {flight.departureTime} → {flight.arrivalTime}
        </p>
        <p><strong>Duration:</strong> {flight.duration}</p>
      </div>
    </div>
  );
}

export default FlightCard;
