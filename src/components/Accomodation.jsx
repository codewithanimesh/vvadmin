import React, { useState } from 'react';

const initialAccommodations = [
  { id: 1, name: 'Student Dorm A', type: 'Shared Room', price: 500 },
  { id: 2, name: 'Off-campus Apartment', type: 'Studio', price: 800 },
  { id: 3, name: 'Homestay', type: 'Private Room', price: 600 },
];

function Accommodation() {
  const [accommodations] = useState(initialAccommodations);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const handleSelect = (accommodation) => {
    setSelectedAccommodation(accommodation);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Accommodation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accommodations.map((accommodation) => (
          <div key={accommodation.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{accommodation.name}</h2>
            <p>Type: {accommodation.type}</p>
            <p>Price: ${accommodation.price}/month</p>
            <button
              onClick={() => handleSelect(accommodation)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Select
            </button>
          </div>
        ))}
      </div>
      {selectedAccommodation && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Selected Accommodation</h2>
          <p>Name: {selectedAccommodation.name}</p>
          <p>Type: {selectedAccommodation.type}</p>
          <p>Price: ${selectedAccommodation.price}/month</p>
          <button
            onClick={() => setSelectedAccommodation(null)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel Selection
          </button>
        </div>
      )}
    </div>
  );
}

export default Accommodation;

