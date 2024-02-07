import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Login({ onLogin }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For simplicity, we're not actually checking the username and password.
    // In a real application, you would want to verify these credentials.
    dispatch({ type: 'LOGIN' });
    onLogin();
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
