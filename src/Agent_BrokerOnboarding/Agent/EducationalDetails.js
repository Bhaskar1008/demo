import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import "./EducationalDetails.css";

const { Title, Text } = Typography;

const EducationalDetails = () => {
  const [form] = Form.useForm();
  const [selected, setSelected] = useState([]);

  const handleFinish = (values) => {
    console.log("Submitted:", values);
  };

  const handleCheckboxChange = (checkedValues) => {
    setSelected(checkedValues);
  };

  return (
    <div className="education-container">
      {/* <div className="education-card"> */}
      <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, maxWidth: `${window.innerWidth < 600 ? "100%" : "80"}` }}>
        <Title level={3} style={{ color: "#FF6A00", marginBottom: 24, fontWeight: "500" }}>
          Agent Accreditation
        </Title>
        <Text className="education-subtitle">Please provide all details about your educational background.</Text>

        <Text className="education-link">Select And Provide Details</Text>

        <Form form={form} layout="vertical" onFinish={handleFinish} className="education-form">
          <Form.Item name="educationLevel">
            <Checkbox.Group style={{ display: "flex", flexDirection: "column", marginTop: "10px" }} onChange={handleCheckboxChange}>
              <Checkbox value="highschool">Highschool Graduate</Checkbox>
              <Checkbox value="vocational">Vocational</Checkbox>
              <Checkbox value="college">College Graduate</Checkbox>
              <Checkbox value="postgraduate">Post Graduate</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          {selected.includes("postgraduate") && (
            <>
              <Form.Item label="Course Name" name="courseName" rules={[{ required: true, message: "Enter course name" }]}>
                <Input placeholder="Master of Business Administration (MBA)" />
              </Form.Item>

              <Form.Item label="Institution Name" name="institutionName" rules={[{ required: true, message: "Enter institution name" }]}>
                <Input placeholder="University of the Philippines Diliman" />
              </Form.Item>

              <Form.Item label="Completion Year" name="completionYear" rules={[{ required: true, message: "Enter year" }]}>
                <Input placeholder="2022" />
              </Form.Item>
            </>
          )}

          <div className="education-btn-group">
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

export default EducationalDetails;
