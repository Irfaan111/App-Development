import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Auth.css';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setUserId } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get("http://localhost:8080/User/verify", {
        params: {
          email: email,
          password: password,
        }
      });
      const {id} = response.data
      console.log(id);
      setUserId(id);
      navigate('/dashboard');
      if (response.data.length > 0) {
        // Successful login
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.log(error)
    }
  };

  return (
    <div className="login-wrapper">
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login Now</button>
      </form>
      <p className="redirect-text">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;