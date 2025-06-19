import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddFlight from "./pages/AddFlight";
import FlightList from "./pages/FlightList";
import { FaPlaneDeparture, FaListUl,FaChevronDown ,FaPlaneArrival } from "react-icons/fa";


function App() {

    const airlines = [
    {
      name: "Hahn Air Businessline",
      price: "85.435",
      logo: "/assets/hahn.png",
    },
    {
      name: "Qatar Airways",
      price: "124.874",
      logo: "/assets/qatar.png",
    },
    {
      name: "Emirates Airlines",
      price: "135.699",
      logo: "/assets/emirates.png",
    },
    {
      name: "Gulf Air Company",
      price: "142.038",
      logo: "/assets/gulf-air.svg",
    },
    {
      name: "Royal Jordanian",
      price: "142.734",
      logo: "/assets/royal.jpg",
    },
  ];
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f7fa] text-gray-800">
       <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 text-sm">

        {/* ✅ Left: Logo or Title */}
        <div className="flex items-center gap-2">
          <FaPlaneDeparture className="text-red-600 text-xl" />
          <h1 className="text-xl font-bold text-red-600">Flight Search</h1>
        </div>

        {/* ✅ Right: Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-blue-700 hover:text-red-600 font-semibold flex items-center gap-1"
          >
            <FaPlaneDeparture /> Add Flight
          </Link>

          <Link
            to="/flights"
            className="text-blue-700 hover:text-red-600 font-semibold flex items-center gap-1"
          >
            <FaListUl /> View Flights
          </Link>

          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <span role="img" aria-label="Kuwait">🇰🇼</span>
            <span>KWD</span>
            <FaChevronDown className="text-xs mt-0.5" />
          </div>

          <a href="#" className="hover:text-blue-600 font-medium">My Booking</a>
        </div>
      </div>
    </div>









  <div className="bg-blue-600 p-4 rounded-md mt-4 text-white space-y-2">
      <div className="flex space-x-2">
        <button className="bg-white text-blue-600 px-4 py-1 rounded">One Way</button>
        <button className="bg-white text-blue-600 px-4 py-1 rounded">Round Trip</button>
        <button className="bg-white text-blue-600 px-4 py-1 rounded">Multi City</button>
      </div>
      <div className="flex flex-wrap gap-2">
        <input className="rounded p-2 text-black flex-1 bg-white" placeholder="From (e.g. Dubai)" />
        <input className="rounded p-2 text-black flex-1 bg-white" placeholder="To (e.g. Kuwait)" />
        <input className="rounded p-2 text-black w-48 bg-white" type="date" />
        <input className="rounded p-2 text-black w-48 bg-white" type="date" />
        <select className="rounded p-2 text-black w-60 bg-white">
          <option>1 Traveller, Economy</option>
        </select>
        <button className="bg-pink-600 px-6 py-2 rounded text-white">Search</button>
      </div>
    </div>





       <div className="bg-white shadow p-2 rounded-lg w-[1100px] h-auto mx-auto my-4">
      <div className="flex justify-between gap-2">
        {airlines.map((airline, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[110px] p-2"
          >
            <img
              src={airline.logo}
              alt={airline.name}
              className="w-12 h-10 object-contain mb-1"
            />
            <span className="text-xs font-semibold text-gray-800 text-wrap">{airline.name}</span>
            <span className="text-xs text-blue-600 font-medium">KWD {airline.price}</span>
          </div>
        ))}
      </div>
    </div>




    

        <Routes>
          <Route path="/" element={<AddFlight />} />
          <Route path="/flights" element={<FlightList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
