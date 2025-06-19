import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const initialState = {
  name: "",
  number: "",
  departureCity: "",
  arrivalCity: "",
  departureDate: "",
  arrivalDate: "",
  departureTime: "",
  arrivalTime: "",
  price: "",
};

export default function AddFlight({ setFlights }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const duration = calculateDuration(form.departureDate, form.departureTime, form.arrivalDate, form.arrivalTime);
    setFlights((prev) => [...prev, { ...form, duration }]);
    setForm(initialState);
  };

  const calculateDuration = (depDate, depTime, arrDate, arrTime) => {
    const dep = new Date(`${depDate}T${depTime}`);
    const arr = new Date(`${arrDate}T${arrTime}`);
    const diff = Math.abs(arr - dep) / 1000;
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <>
    <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <FaPlus /> Add New Flight
      </h2>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 grid gap-4 grid-cols-1 md:grid-cols-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Flight Name" required className="input" />
      <input name="number" value={form.number} onChange={handleChange} placeholder="Flight Number" required className="input" />
      <input name="departureCity" value={form.departureCity} onChange={handleChange} placeholder="Departure City" required pattern="[A-Za-z\s]+" className="input" />
      <input name="arrivalCity" value={form.arrivalCity} onChange={handleChange} placeholder="Arrival City" required pattern="[A-Za-z\s]+" className="input" />
      <input type="date" name="departureDate" value={form.departureDate} onChange={handleChange} required className="input" />
      <input type="date" name="arrivalDate" value={form.arrivalDate} onChange={handleChange} required className="input" />
      <input type="time" name="departureTime" value={form.departureTime} onChange={handleChange} required className="input" />
      <input type="time" name="arrivalTime" value={form.arrivalTime} onChange={handleChange} required className="input" />
      <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price ₹" required className="input" />
      <button type="submit" className="bg-blue-600 text-white rounded-md py-2 px-4 mt-2 col-span-1 md:col-span-2 hover:bg-blue-700 transition">
        Add Flight
      </button>
    </form>
    </>
  );
}
