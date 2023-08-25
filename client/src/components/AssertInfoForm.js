import React, { useState } from 'react';

function AssetInfoForm() {
  const [assetData, setAssetData] = useState({
    assetName: '',
    quantity: '',
    cost: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetData({ ...assetData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation: Check if quantity and cost are not negative
    if (assetData.quantity < 0 || assetData.cost < 0) {
      alert('Quantity and cost cannot be negative.');
      return;
    }

    try {
      // Send the assetData to the API using fetch or any HTTP library
      const response = await fetch('http://localhost:8000/v1/asset/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assetData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Asset created successfully:', data);
      } else {
        console.error('Failed to create asset.');
      }
    } catch (error) {
      console.error('Error creating asset:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Asset Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-left">Asset Name:</label>
            <input
              type="text"
              name="assetName"
              value={assetData.assetName}
              onChange={handleChange}
              className="border rounded-full p-2 w-full mb-2 dark-border"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-left">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={assetData.quantity}
              onChange={handleChange}
              className="border rounded-full p-2 w-full mb-2 dark-border"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-left">Cost:</label>
            <input
              type="number"
              name="cost"
              value={assetData.cost}
              onChange={handleChange}
              className="border rounded-full p-2 w-full mb-2 dark-border"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AssetInfoForm;
