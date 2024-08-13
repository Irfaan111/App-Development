import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PolicyList from './components/Policy/PolicyList';
import PolicyDetails from './components/Policy/PolicyDetails';
import Profile from './components/Profile/Profile';
import Logout from './components/Auth/Logout';
import Support from './components/Dashboard/Support';
import './styles/App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/policies" exact element={<PolicyList />} />
            <Route path="/policies/:id" element={<PolicyDetails />} />
            <Route path="/support" element={<Support />} />
          </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;