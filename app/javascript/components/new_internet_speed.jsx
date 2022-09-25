import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NewInternetSpeed() {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
          <div>
              <h2 className="text-4xl text-gray-600 font-semibold">Places</h2>
          </div>
          <div className="flex items-center justify-between">
              <div className="lg:ml-40 ml-10 space-x-8">
                  <Link to="/new-internet-speed">
                      <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                          New Log
                      </button>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  )
}
