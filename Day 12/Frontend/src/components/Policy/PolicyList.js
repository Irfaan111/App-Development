import React from 'react';
import '../../styles/PolicyList.css';

const PolicyCard = ({ title, description, premium, duration, src }) => {
  return (
    <div className="policy-card">
      <img src={src} alt={title} className="policy-image" width={'400px'} height={'400px'}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="policy-details">
        <p><b>Premium:</b> ${premium}</p>
        <p><b>Duration:</b> {duration} years</p>
      </div>
      <button className="policy-button">Get Insurance</button>
    </div>
  );
};

const PolicyList = () => {
  const policies = [
    { title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family.', premium: 300, duration: 2, src: 'https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid' },
    { title: 'Life Insurance', description: 'Secure your family’s future with our life insurance plans.', premium: 500, duration: 20, src: 'https://thumbs.dreamstime.com/b/life-insurance-collage-concept-cloud-tags-over-blue-background-49677329.jpg' },
    { title: 'Car Insurance', description: 'Get complete protection for your vehicle.', premium: 200, duration: 1, src: 'https://t4.ftcdn.net/jpg/02/27/91/63/360_F_227916353_JqJA3wVCUZUNeWHgd78ZO9W0GrbhiwSr.jpg' },
    { title: 'Home Insurance', description: 'Protect your home and belongings from unforeseen events.', premium: 250, duration: 5, src: 'https://m.economictimes.com/thumb/msid-69278711,width-1200,height-900,resizemode-4,imgsize-132321/home-insurance-getty.jpg' },
    { title: 'Travel Insurance', description: 'Travel worry-free with our travel insurance plans.', premium: 100, duration: 0.5, src: 'https://thumbs.dreamstime.com/b/travel-insurance-16074974.jpg' },
    { title: 'Business Insurance', description: 'Safeguard your business with tailored insurance plans.', premium: 1000, duration: 10, src: 'https://www.rmmagazine.com/images/default-source/magazineimages/2022/11/commercial-insurance-market-outlook.jpg?sfvrsn=e614afc_1' },
  ];

  return (
    <div className="policy-page-container">
      <h1>Our Insurance Policies</h1>
      <div className="policy-grid">
        {policies.map((policy, index) => (
          <PolicyCard
            key={index}
            title={policy.title}
            description={policy.description}
            premium={policy.premium}
            duration={policy.duration}
            src={policy.src}
          />
        ))}
      </div>
    </div>
  );
};

export default PolicyList;