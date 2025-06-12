"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginComponent = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="h-screen flex justify-center items-center  ">
      <main className="border bordergray my-auto p-5 pb-8 rounded-md max-w-[330px] w-full shadow-xl">
        <h1 className="text-center text-3xl font-semibold font-inria mb-8">
          Login
        </h1>
        <div className="flex flex-col ">
          <label className="text-sm">Gender</label>
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="border rounded-md mt-1 p-1.5"
            style={{ fontSize: "13px" }}
          >
            <option style={{ fontSize: "13px" }} value="" className="">
              Select Gender
            </option>
            <option value="male" style={{ fontSize: "13px" }}>
              Male
            </option>
            <option value="female" style={{ fontSize: "13px" }}>
              Female
            </option>
          </select>
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-sm">Date of Birth</label>
          <input
            value={gender}
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="border rounded-md mt-1 text-xs p-1"
          />
        </div>
        <div className="mt-8">
          <p className="text-center mt-3 text-sm font-medium">
            Already signed in once
          </p>
          <button className="flex justify-center items-center gap-2  py-2  w-full bg-blue-400 rounded-md mt-3 mx-auto">
            <FcGoogle />
            <span className="inline-block text-sm text-white font-medium">
              Sign in with google
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginComponent;
