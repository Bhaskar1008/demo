import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const PersonalDetailsBroker = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, width: window.innerWidth < 600 ? "100%" : "80%" }}>
      <Title level={3} style={{ color: "#FF6A00", marginBottom: 24, fontWeight: "500" }}>
        Broker Accreditation
      </Title>
      <Text type="secondary" style={{ fontWeight: "400", letterSpacing: "7%", color: "#4A5259" }}>
        To know you better, fill out this form to complete your registration. Your details will be saved to your account.
      </Text>

      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 24, width: window.innerWidth < 600 ? "100%" : "80%" }}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Company Name" name="companyName" rules={[{ required: true, message: "Please enter company name" }]}>
              <Input placeholder="Enter company name" defaultValue="VitalShield Brokers" disabled />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Business Address Line 1" name="businessAddress1" rules={[{ required: true, message: "Please enter business address" }]}>
              <Input placeholder="Enter business address" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Business Address Line 2" name="businessAddress2" rules={[{ required: true, message: "Please enter business address line 2" }]}>
              <Input placeholder="Enter business address" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              label="Business Email ID"
              name="businessEmail"
              rules={[
                { required: true, message: "Please enter business email" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input placeholder="Enter business email id" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Tel No" name="telNo" rules={[{ required: true, message: "Please enter telephone number" }]}>
              <Input placeholder="Enter tel No" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="TIN No" name="tinNo" rules={[{ required: true, message: "Please enter TIN number" }]}>
              <Input placeholder="Enter TIN No" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Company Residence Certificate No" name="residenceCertNo" rules={[{ required: true, message: "Please enter residence certificate number" }]}>
              <Input placeholder="Enter residence certificate No" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Date Issued" name="dateIssued" rules={[{ required: true, message: "Please enter date issued" }]}>
              <Input placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Place Issued" name="placeIssued" rules={[{ required: true, message: "Please enter place issued" }]}>
              <Input placeholder="Enter place of issue" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="SEC Registration No" name="secRegNo" rules={[{ required: true, message: "Please enter SEC registration number" }]}>
              <Input placeholder="Enter SEC registration no" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="IC License No" name="icLicenseNo" rules={[{ required: true, message: "Please enter IC license number" }]}>
              <Input placeholder="Enter IC license no" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#FF6A00",
              borderColor: "#FF6A00",
              marginTop: 24,
            }}
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetailsBroker;
