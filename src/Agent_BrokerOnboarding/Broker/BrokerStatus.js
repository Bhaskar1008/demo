import React from "react";
import { Typography, Card, Button } from "antd";
import { FileSearchOutlined, FileImageOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const BrokerStatus = () => {
  const registrationId = "#123456789";

  const handlePresentationClick = () => {
    console.log("Opening Agency Program Presentation...");
    // Here you can open a link or modal
  };

  return (
    <div
      style={{
        padding: 24,
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <Title level={3} style={{ color: "#FF6A00" }}>
        Broker Accreditation
      </Title>

      <div style={{ marginTop: 48 }}>
        <FileSearchOutlined style={{ fontSize: 80, color: "#1890ff" }} />

        <Title level={4} style={{ color: "#1890ff", marginTop: 24 }}>
          Verifying Details
        </Title>

        <Text strong>Registration ID: {registrationId}</Text>

        <div style={{ marginTop: 24, maxWidth: 600, marginInline: "auto" }}>
          <Text style={{ fontSize: 16, color: "#4A5259" }}>
            Our team is currently verifying your documents before officially accrediting you.
            <br />
            You can return to this page to check your Registration status.
            <br />
            We will notify you via email once the validation process is complete.
          </Text>
        </div>

        <div style={{ marginTop: 48 }}>
          <Text style={{ fontSize: 16, color: "#4A5259" }}>Meanwhile, explore the BOP/Agency program presentation to learn about iCare and top healthcare plans in the Philippines.</Text>

          <Card
            hoverable
            style={{
              width: 300,
              margin: "24px auto 0",
              border: "1px solid #ffe7cc",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            onClick={handlePresentationClick}
          >
            <FileImageOutlined style={{ fontSize: 40, color: "#FF6A00" }} />
            <Title level={5} style={{ marginTop: 16, color: "#1890ff" }}>
              Agency program presentation
            </Title>
            <Text style={{ fontSize: 12, color: "#888" }}>TAP TO VIEW</Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BrokerStatus;
