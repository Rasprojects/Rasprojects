"use client";

import { useEffect } from "react";
import { MdError } from 'react-icons/md';


export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error: ", error);

    // If the error has a digest property, log that as well
    if (error.digest) {
      console.error("Error digest: ", error.digest);
    }
  }, [error]);

  return (
    <div className="p-4 bg-red-100 rounded-md text-red-700 flex items-center space-x-4">
      <MdError size={32} className="text-red-700" />
      <div>
        <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
