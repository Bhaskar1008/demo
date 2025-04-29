import React from 'react';
import './ChannelPartnerCard.css';

const ChannelPartnerCard = ({ data }) => {
  const {
    date,
    type,
    user,
    status,
    email,
    mobile,
    location,
    workExperience,
    previousCompany,
    representative,
    designation
  } = data;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="channel-partner-card">
      <div className="card-header">
        <div className="avatar">
          {user.avatar || getInitials(user.name)}
        </div>
        <div className="header-info">
          <div className="name">{user.name}</div>
          <div className="company-id-wrapper">
            <div className={`type-icon ${type.toLowerCase()}`} />
            <div className="company-id">{user.company}</div>
          </div>
        </div>
        <div className="status-badge">{status}</div>
      </div>

      <div className="card-content">
        <div className="info-group">
          <div className="label">Created On</div>
          <div className="value">{date}</div>
        </div>

        <div className="info-group">
          <div className="label">Email ID</div>
          <div className="value">{email}</div>
        </div>

        <div className="info-group">
          <div className="label">Mobile No</div>
          <div className="value">{mobile}</div>
        </div>

        {type === 'SELF' ? (
          <>
            <div className="info-group">
              <div className="label">Work Experience</div>
              <div className="value">{workExperience}</div>
            </div>

            <div className="info-group">
              <div className="label">Previous Company</div>
              <div className="value">{previousCompany}</div>
            </div>
          </>
        ) : (
          <>
            <div className="info-group">
              <div className="label">Representative Name</div>
              <div className="value">{representative}</div>
            </div>

            <div className="info-group">
              <div className="label">Designation</div>
              <div className="value">{designation}</div>
            </div>
          </>
        )}

        
        <div className="info-group">
          <div className="label">Location</div>
          <div className="value">{location}</div>
        </div>

      </div>

      <button className="view-registration">
        VIEW REGISTRATION
      </button>
    </div>
  );
};

export default ChannelPartnerCard;