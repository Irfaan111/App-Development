import React from 'react';
import '../../styles/Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Support Center</h1>
        <p>We are here to help you with any questions or issues you may have.</p>
      </div>
      <div className="support-content">
        <div className="support-section">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><b>How do I reset my password?</b><br/>You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions.</li>
            <li><b>How can I contact customer support?</b><br/>You can contact us via email at support@stanleyinsurance.com or call us at (123) 456-7890.</li>
            <li><b>Where can I view my policy details?</b><br/>You can view your policy details on the 'Policy Management' section of your dashboard.</li>
          </ul>
        </div>
        <div className="support-section">
          <h2>Contact Us</h2>
          <form className="support-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
