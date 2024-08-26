'use client';

import { useState } from 'react';

export default function Home() {
  const [certificateNo, setCertificateNo] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that Certificate Number is not empty
    if (!certificateNo) {
      setError('Certificate Number is required.');
      return;
    }

    // Validate that Phone Number is exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNo)) {
      setError('Phone Number must be exactly 10 digits.');
      return;
    }

    setError(''); // Clear any previous errors

    const formData = {
      certificateNo,
      phoneNo,
    };

    console.log('Form Data:', formData);
    // You can send this data to your backend or process it further
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="z-10 max-w-md w-full items-center justify-center font-mono text-sm">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-gray-300"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Enter Your Details
          </h2>
          {error && (
            <div className="mb-4 animate-slide-in bg-red-500 text-white font-medium p-3 rounded-lg shadow-lg">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="certificateNo"
              className="block text-sm font-medium text-white"
            >
              Certificate Number
            </label>
            <input
              type="text"
              id="certificateNo"
              value={certificateNo}
              onChange={(e) => setCertificateNo(e.target.value)}
              className="mt-1 p-2 w-full rounded-md border border-gray-400 bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-white"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="mt-1 p-2 w-full rounded-md border border-gray-400 bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
