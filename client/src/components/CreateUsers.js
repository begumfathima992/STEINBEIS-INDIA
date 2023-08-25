import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import AuthTab from './AuthTab';

function CreateUsers() {
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    dob: '',
  });
  const history = useHistory(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the formData to the API using fetch or any HTTP library
      const response = await fetch('http://localhost:8000/v1/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        history.push('/login');
        alert('User created successfully:', data);
        
        // If user is created successfully, navigate to the assets page
        // Redirect to the assets page
      } else {
        alert('Failed to create user.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="bg-gray-100">
       <AuthTab/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">User Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col">
            <label className="mb-2 text-left">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-full p-2 w-full mb-2 dark-border"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-left">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border rounded-full p-2 w-full mb-2 dark-border"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-left">Gender:</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border rounded-full p-2 w-full mb-2 dark-border"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-left">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
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
    </div>
  );
}

export default CreateUsers;
