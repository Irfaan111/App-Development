import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/PolicyDetails.css';

const PolicyDetails = () => {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    // Fetch policy details from an API
    axios.get(`/api/policies/${id}`)
      .then(response => setPolicy(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="policy-details-container">
      {policy ? (
        <>
          <h2>{policy.name}</h2>
          <p>{policy.description}</p>
          <p>Coverage: {policy.coverage}</p>
          <p>Premium: {policy.premium}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PolicyDetails;
