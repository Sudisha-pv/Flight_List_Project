import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddFlight from "./pages/AddFlight";
import FlightList from "./pages/FlightList";
import { FaPlaneDeparture, FaListUl } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f7fa] text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-600 flex items-center gap-2">
            <FaPlaneDeparture /> Flight Search
          </h1>
          <div className="flex gap-4">
            <Link to="/" className="text-blue-700 hover:text-red-600 font-semibold flex items-center gap-1">
              <FaPlaneDeparture /> Add Flight
            </Link>
            <Link to="/flights" className="text-blue-700 hover:text-red-600 font-semibold flex items-center gap-1">
              <FaListUl /> View Flights
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<AddFlight />} />
          <Route path="/flights" element={<FlightList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
