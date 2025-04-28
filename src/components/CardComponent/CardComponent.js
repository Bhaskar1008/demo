import React from 'react';
import './CardComponent.css';

const CardComponent = ({ data }) => {
  const {
    date,
    type,
    user,
    quoteType,
    travelPack,
    travelProduct,
    premium,
    status,
    expiry,
    quotationNumber,
    riskInspectionStatus
  } = data;

  const getTypeImage = () => {
    return type === 'MOTOR' 
      ? 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
      : 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1';
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="date">{date}</div>
        <div className={`tag ${type.toLowerCase()}`}>{type}</div>
      </div>
      
      <div className="user-info">
        <img 
          src={getTypeImage()} 
          alt={type} 
          className="avatar"
          style={{ objectFit: 'cover' }}
        />
        <div className="details">
          <div className="name">{user.name}</div>
          <div className="company">{user.company}</div>
        </div>
      </div>

      <div className="card-grid">
        <div className="info-group">
          <div className="label">Quote Type</div>
          <div className="value">{quoteType}</div>
        </div>
        
        <div className="info-group">
          <div className="label">Travel Pack</div>
          <div className="value">{travelPack}</div>
        </div>
        
        <div className="info-group">
          <div className="label">Travel Product</div>
          <div className="value">{travelProduct}</div>
        </div>
        
        <div className="info-group">
          <div className="label">Premium</div>
          <div className="value">{premium}</div>
        </div>
        
        <div className="info-group">
          <div className="label">Status</div>
          <div className={`value status ${status.toLowerCase()}`}>{status}</div>
        </div>
        
        <div className="info-group">
          <div className="label">Expiry</div>
          <div className="value">{expiry}</div>
        </div>
        
        <div className="info-group">
          <div className="label">Quotation Number</div>
          <div className="value">{quotationNumber}</div>
        </div>

        {riskInspectionStatus && (
          <div className="info-group">
            <div className="label">Risk Inspection Status</div>
            <div className={`value status ${riskInspectionStatus.toLowerCase()}`}>
              {riskInspectionStatus}
            </div>
          </div>
        )}
      </div>

      <button className="view-details">VIEW DETAILS</button>
    </div>
  );
};

export default CardComponent;