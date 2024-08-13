import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css';
import { AuthContext } from '../../context/AuthContext';

const Card = ({ image, title, description, link, linkText }) => {

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div>
        <h3>{title}</h3>
        </div>
        <div>
        <p className='dp'>{description}</p>
        {link && (
          <a href={link} className="btn-link">
            {linkText || 'Learn More'}
          </a>
        )}
        </div>
      </div>
    </div>
  );
};



const Dashboard = () => {

  const { userId } = useContext(AuthContext)
  console.log(userId)
  
  return (
    <div className='dashboard'>
      <div className="dashboard-header">
        <div className='img'>
          <div>
            <img src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2" width={'70px'}/>
          </div>

          <div className='header'>
            <div><h3><b>Stanley Insurance</b><br/></h3></div>
            <div>Insurance Management Dashboard</div>
          </div>

        </div>

        <div className="logout-section">
        <a href="#about" className="btn-link">About</a>
        <a href="#contact" className="btn-link">Contact</a>
        <Link to="/logout" className="btn-link logout-btn">Logout</Link>
        </div>

      </div>


      <div className="dashboard-content">
        <div className="dashboard-grid">
        <Card
          image="https://img.icons8.com/?size=100&id=118880&format=png&color=000000"
          title="Account Overview"
          description="View and manage your account details."
          link={`/profile/${userId}`}
          linkText="View Profile"
        />
        <Card
          image="https://img.icons8.com/?size=100&id=bpAPjyNopdSz&format=png&color=000000"
          title="Policy Management"
          description="Access and manage your insurance policies."
          link="/policies"
          linkText="View Policies"
        />
         <Card
          image="https://img.icons8.com/?size=100&id=2908&format=png&color=000000"
          title="Need Help?"
          description="Contact support & find answer to your questions."
          link="/support"
          linkText="Support Center"
        />
        </div>
      </div>


      <div className='footer-content'>
        <div className='footer' id="contact">
          <h3>Contact :</h3>
          <p>
          <b>Phone:</b> (123) 456-7890<br/><br/>
          <b>Email:</b> support@stanleyinsurance.com<br/><br/>
          <b>Address:</b> 1234 Insurance Lane, Suite 567, Your City, Country<br/><br/>
          Stay protected, stay insured with Stanley Insurance.<br/><br/>
          </p>
        </div>
        <div className='footer' id="about">
          <h3>About :</h3>
          <p>
          At Stanley Insurance, we are committed to providing personalized and reliable insurance solutions to meet the unique needs of our clients. With years of experience in the industry, our mission is to protect what matters most to you—whether it's your home, health, business, or life. Our expert team is dedicated to delivering exceptional service, ensuring that you have the peace of mind and security you deserve. Trust Stanley Insurance to be your partner in safeguarding your future.
          </p>
          <p></p>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;