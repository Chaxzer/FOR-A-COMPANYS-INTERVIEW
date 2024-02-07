import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      {isAuthenticated ? <Dashboard /> : <Login onLogin={() => setIsAuthenticated(true)} />}
    </Provider>
  );
}

export default App;