import React from "react";
import { Form, Input, Select, Button, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

const PersonalDetailsAgent = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, width: `${window.innerWidth < 600 ? "100%" : "80%"}` }}>
      <Title level={3} style={{ color: "#FF6A00", marginBottom: 24, fontWeight: "500" }}>
        Agent Accreditation
      </Title>
      <Text type="secondary" style={{ fontWeight: "400", letterSpacing: "7%", color: "#4A5259" }}>
        To know you better, fill out this form to complete your registration. Your details will be saved to your account.
      </Text>

      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 24, width: window.innerWidth < 600 ? "100%" : "80" }}>
        <Row gutter={16} style={{}}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Apply As" name="applyAs" rules={[{ required: true, message: "Please select agent type" }]}>
              <Select placeholder="Select Type of Agent">
                <Option value="individual">Individual</Option>
                <Option value="corporate">Corporate</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please enter first name" }]}>
              <Input large placeholder="Enter first name" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Middle Name" name="middleName">
              <Input placeholder="Enter middle name" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please enter last name" }]}>
              <Input placeholder="Enter last name" defaultValue="Last Name" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Address Line 1" name="address1">
              <Input placeholder="Enter address line 1" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Address Line 2" name="address2">
              <Input placeholder="Enter address line 2" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="State" name="state">
              <Select placeholder="Select state">
                <Option value="state1">State 1</Option>
                <Option value="state2">State 2</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="City" name="city">
              <Select placeholder="Select city">
                <Option value="city1">City 1</Option>
                <Option value="city2">City 2</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="PIN Code" name="pinCode">
              <Input placeholder="Enter Pincode" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Date of Birth" name="dob">
              <Input placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Age" name="age">
              <Input placeholder="Enter your age" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Gender" name="gender">
              <Select placeholder="Select gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Tel No" name="telNo">
              <Input placeholder="Enter tel No" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Mobile No" name="mobileNo">
              <Input placeholder="+63 92345 67890" suffix={<span style={{ color: "green", fontWeight: "bold" }}>VERIFIED</span>} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Email ID" name="email">
              <Input placeholder="Enter email id" suffix={<span style={{ color: "green", fontWeight: "bold" }}>VERIFY</span>} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="TIN No" name="tin">
              <Input placeholder="Enter referral link" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: "#FF6A00", borderColor: "#FF6A00", marginTop: 24 }}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetailsAgent;
