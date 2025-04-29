import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const CompanyRepresentativeDetails = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Representative details submitted:", values);
  };

  const handleBack = () => {
    console.log("Go back clicked");
    // Navigate back logic here (e.g., props.history.back() or router.push)
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, width: window.innerWidth < 600 ? "100%" : "60%" }}>
      <Title level={3} style={{ color: "#FF6A00", marginBottom: 12, fontWeight: "500" }}>
        Broker Accreditation
      </Title>
      <Text type="secondary" style={{ fontWeight: "400", color: "#4A5259" }}>
        Please provide Company Representative details
      </Text>

      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Representative First Name" name="firstName" rules={[{ required: true, message: "Please enter first name" }]}>
              <Input placeholder="Ana" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Representative Last Name" name="lastName" rules={[{ required: true, message: "Please enter last name" }]}>
              <Input placeholder="Reyes" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Designation" name="designation" rules={[{ required: true, message: "Please enter designation" }]}>
              <Input placeholder="Enter designation" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Mobile No" name="mobileNo" rules={[{ required: true, message: "Please enter mobile number" }]}>
              <Input placeholder="9345678901" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              label="Email ID"
              name="email"
              rules={[
                { required: true, message: "Please enter email ID" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input placeholder="anareyes@gmail.com" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <Button onClick={handleBack} style={{ borderColor: "#00B2FF", color: "#00B2FF" }}>
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#FF6A00",
              borderColor: "#FF6A00",
            }}
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CompanyRepresentativeDetails;
