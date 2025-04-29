import React from "react";
import { Form, Input, Button, Col, Row, Typography } from "antd";
import "./BankingDetails.css";

const { Title, Text } = Typography;

const BankingDetails = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="accreditation-container">
      {/* <div className="accreditation-card">
       */}
      <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, maxWidth: `${window.innerWidth < 600 ? "100%" : "80"}` }}>
        <Title level={3} style={{ color: "#FF6A00", marginBottom: 24, fontWeight: "500" }}>
          Agent Accreditation
        </Title>
        <Text className="accreditation-subtitle">Please provide Bank Account Details For Crediting of Prospective Commissions.</Text>

        <Form form={form} layout="vertical" onFinish={handleFinish} className="accreditation-form">
          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item name="bankName" label="Bank Name" rules={[{ required: true, message: "Enter bank name" }]}>
                <Input placeholder="Enter bank name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="branchName" label="Branch Name" rules={[{ required: true, message: "Enter branch name" }]}>
                <Input placeholder="Enter branch name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="accountName" label="Account Name" rules={[{ required: true, message: "Enter account name" }]}>
                <Input placeholder="Enter account name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="accountNo" label="Account No" rules={[{ required: true, message: "Enter account number" }]}>
                <Input placeholder="Enter Account No" />
              </Form.Item>
            </Col>
          </Row>

          <div className="button-group">
            <Button type="default" className="back-btn">
              Back
            </Button>
            <Button type="primary" htmlType="submit" className="next-btn">
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BankingDetails;
