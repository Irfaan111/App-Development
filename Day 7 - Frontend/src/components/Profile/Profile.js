import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Profile.css';

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/GetUserById/${userId}`);
        setUser(response.data);
      } catch (error) {
        setError('Error fetching user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src={`https://robohash.org/${user.id}`} alt="User Avatar" />
        </div>
        <div className="profile-info">
          <br/><h2>{user.name}</h2><br/>
          <div><p><b>Email: </b>{user.email}</p></div>
          <div><p><b>Password:</b> {user.password}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;