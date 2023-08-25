// Purchase.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Purchase() {
  const history = useHistory();

  // Check if the user is authenticated
  const userAuthenticated = localStorage.getItem('userAuthenticated') === 'true';

  const [formData, setFormData] = useState({
    assetName: '',
    bankBalance: '',
  });

  const handlePurchase = () => {
    // Implement purchase logic here
    alert('Asset purchased successfully');
    history.push('/');
  };

  if (!userAuthenticated) {
    return <div>You must be logged in to purchase assets.</div>;
  }

  return (
    <div>
      <h2>Purchase Page</h2>
      <input
        type="text"
        placeholder="Asset Name"
        value={formData.assetName}
        onChange={(e) => setFormData({ ...formData, assetName: e.target.value })}
      />
      <input
        type="number"
        placeholder="Bank Balance"
        value={formData.bankBalance}
        onChange={(e) => setFormData({ ...formData, bankBalance: e.target.value })}
      />
      <button onClick={handlePurchase}>Purchase Asset</button>
    </div>
  );
}

export default Purchase;
