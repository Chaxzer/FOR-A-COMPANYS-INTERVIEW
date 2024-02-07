import React from 'react';
import { useDispatch } from 'react-redux';

function Login({ onLogin }) {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
    onLogin();
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}