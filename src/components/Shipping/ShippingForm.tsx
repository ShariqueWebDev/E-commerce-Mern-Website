"use client";
import React, { useState } from "react";

const ShippingForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="my-24">
        <h2 className="md:text-3xl text-2xl font-semibold text-center mb-5">
          Fill Shipping Form
        </h2>
        <form className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 border">
          <h2 className="text-xl font-semibold text-gray-700">
            Shipping Details
          </h2>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className=" placeholder:text-sm mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={shippingInfo.address}
              onChange={onChangeHandler}
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              name="city"
              type="text"
              placeholder="Enter city"
              className=" placeholder:text-sm mt-1 w-full border border-gray-300 rounded-md p-2"
              required
              value={shippingInfo.city}
              onChange={onChangeHandler}
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              name="state"
              type="text"
              placeholder="Enter state"
              className=" placeholder:text-sm mt-1 w-full border border-gray-300 rounded-md p-2"
              required
              value={shippingInfo.state}
              onChange={onChangeHandler}
            />
          </div>

          {/* Country Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country Code
            </label>
            <select
              name="country"
              className=" placeholder:text-sm mt-1 w-full border border-gray-300 rounded-md p-2"
              required
              value={shippingInfo.country}
              onChange={onChangeHandler}
            >
              <option value="" className="text-sm">
                Choose a country code
              </option>
              <option value="+91" className="text-sm">
                +91 (India)
              </option>
              <option value="+1" className="text-sm">
                +1 (USA)
              </option>
              <option value="+44" className="text-sm">
                +44 (UK)
              </option>
              <option value="+61" className="text-sm">
                +61 (Australia)
              </option>
            </select>
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              name="pincode"
              type="text"
              placeholder="Enter pincode"
              className=" placeholder:text-sm mt-1 w-full border border-gray-300 rounded-md p-2"
              required
              value={shippingInfo.pincode}
              onChange={onChangeHandler}
            />
          </div>

          {/* Pay Now Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
