// src/components/AssetList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function AssetList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await axios.get('http://localhost:8000/v1/asset/getAllAssets');
        setAssets(response.data.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    }

    fetchAssets();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Asset List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Asset Name
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {Array.isArray(assets) && assets.map((asset) => (
            <tr key={asset.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{asset.assetName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{asset.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">${asset.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/purchase" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Purchase Assets
      </Link>
    </div>
  );
}

export default AssetList;
