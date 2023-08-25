import React from 'react';
import AssetInfoForm from '../components/AssertInfoForm';
import AssertsList from '../components/AssertsList';

function AssetManagement() {
  return (
<div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Left Section */}
        <div className="w-1/2 p-4">
          <AssetInfoForm />
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-4">
          <AssertsList />
        </div>
      </div>
    </div>
  );
}

export default AssetManagement;
