import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here, such as clearing authentication tokens
    localStorage.removeItem('authToken'); // Example: remove auth token from local storage

    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;