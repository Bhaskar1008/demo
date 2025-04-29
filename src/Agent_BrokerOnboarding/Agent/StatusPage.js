import React from "react";
import { Typography } from "antd";
import "./StatusPage.css";

const { Title, Text } = Typography;

const StatusPage = () => {
  return (
    <div className="status-container">
      <div className="status-body" style={{ paddingTop: "40px" }}>
        <Title level={3} className="status-title">
          Agent Accreditation
        </Title>

        <img src="/images/verifying-icon.png" alt="Verifying" className="status-image" />

        <Title level={4} className="verifying-text">
          Verifying Details
        </Title>

        <Text strong className="registration-id">
          Registration ID : #123456789
        </Text>

        <Text className="status-description">
          Our team is currently verifying your documents before officially accrediting you.
          <br />
          You can return to this page to check your Registration status. We will notify you via email once the validation process is complete.
        </Text>

        <div className="presentation-section">
          <Text className="presentation-description">Meanwhile, explore the BOP/Agency program presentation to learn about iCare and top healthcare plans in the Philippines.</Text>

          <div className="presentation-card">
            <img src="/images/presentation-icon.png" alt="Presentation" className="presentation-icon" />
            <div className="presentation-texts">
              <Text strong className="presentation-link">
                Agency program presentation
              </Text>
              <Text className="tap-to-view">TAP TO VIEW</Text>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-text">
        Powered by <strong>Salesdrive™</strong>
      </div>
    </div>
  );
};

export default StatusPage;
