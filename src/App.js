import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddFlight from "./pages/AddFlight";
import FlightList from "./pages/FlightList";
import { FaPlaneDeparture, FaListUl,FaChevronDown ,FaPlaneArrival } from "react-icons/fa";
import { useState } from "react"; 



import { FaHourglassHalf } from "react-icons/fa";
import { TbArrowsSplit2 } from "react-icons/tb";
import { FaPlane } from "react-icons/fa";


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






   const [price, setPrice] = useState(150);
  const [onward, setOnward] = useState(0);
  const [returnTime, setReturnTime] = useState(0);


  const airline = [
  "Hahn Air Businessline",
  "Qatar Airways",
  "Emirates Airlines",
  "Gulf Air Company",
  "Royal Jordanian",
];
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f7fa] text-gray-800">

        {/* Navbar */}
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








{/* Searchlist */}
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




{/* AirlineList */}
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







    <div className="flex gap-4 p-6">
      {/* Filter Sidebar - 30% */}
      <div className="w-[30%]">
        <div className="bg-white p-4 border rounded shadow-md w-full h-fit space-y-6 text-sm">
          {/* Price Filter */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Price</h2>
            <input
              type="range"
              min="100"
              max="300"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />
            <div className="text-gray-600 mt-1">Up to KWD {price}</div>
          </div>

          {/* Fare Type */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Fare Type</h2>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Refundable
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Non-Refundable
              </label>
            </div>
          </div>

          {/* Duration */}
          <div>
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <FaHourglassHalf /> Duration
            </h2>

            <div className="mb-3">
              <div className="font-medium text-gray-700 mb-1">Onward</div>
              <input
                type="range"
                min="0"
                max="100"
                value={onward}
                onChange={(e) => setOnward(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 H : 45 M</span>
                <span>1 D</span>
              </div>
            </div>

            <div>
              <div className="font-medium text-gray-700 mb-1">Return</div>
              <input
                type="range"
                min="0"
                max="100"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 H : 45 M</span>
                <span>1 D</span>
              </div>
            </div>
          </div>

          {/* Stops */}
          <div>
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <TbArrowsSplit2 /> Stops
            </h2>

            <div className="mb-3">
              <div className="text-gray-700 mb-1">from Dubai</div>
              <div className="grid grid-cols-3 gap-2">
                {["NonStop", "1 Stop", "1 + Stop"].map((label, i) => (
                  <button
                    key={i}
                    className="border rounded p-2 text-center hover:bg-blue-100 text-gray-700 text-xs"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-gray-700 mb-1">from Kuwait</div>
              <div className="grid grid-cols-3 gap-2">
                {["NonStop", "1 Stop", "1 + Stop"].map((label, i) => (
                  <button
                    key={i}
                    className="border rounded p-2 text-center hover:bg-blue-100 text-gray-700 text-xs"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Airlines Filter */}
          <div>
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2 border-t pt-4 mt-4">
              <FaPlane className="text-gray-700" />
              Airlines
            </h2>
            <div className="space-y-2">
              {airline.map((name, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  {name}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 70% */}
     <div className="w-[70%] bg-gray-100 p-6 rounded shadow-inner">
  <h2 className="text-xl font-bold mb-4">Flight Results</h2>
  <FlightList />
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
