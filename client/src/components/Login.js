// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleLogin = () => {
    const { username, password } = formData;
    
    // Check if the username and password match developer credentials
    if (username === 'dev' && password === 'dev@1234') {
      // Set the user as authenticated and redirect to the purchase page
      localStorage.setItem('userAuthenticated', 'true');
      history.push('/assets');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
