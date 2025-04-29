import React, { useState } from "react";
import { Form, Input, Button, Select, Radio, Typography, Divider, Checkbox } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./WorkExperience.css";

const { Title, Text } = Typography;
const { Option } = Select;

const WorkExperience = () => {
  const [form] = Form.useForm();
  const [workList, setWorkList] = useState([{ id: 1 }]);
  const [noWorkExperience, setNoWorkExperience] = useState(false);

  const addWorkExperience = () => {
    setWorkList([...workList, { id: workList.length + 1 }]);
  };

  const handleFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="work-container">
      {/* <div className="work-card"> */}

      <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, maxWidth: `${window.innerWidth < 600 ? "100%" : "80"}` }}>
        <Title level={3} style={{ color: "#FF6A00", marginBottom: 24, fontWeight: "500" }}>
          Agent Accreditation
        </Title>
        <Text className="work-subtitle">Please provide all details about your working and selling experiences.</Text>

        <Checkbox checked={noWorkExperience} onChange={(e) => setNoWorkExperience(e.target.checked)}>
          I have no work experience
        </Checkbox>

        <Form form={form} layout="vertical" onFinish={handleFinish} className="work-form">
          {!noWorkExperience &&
            workList.map((work, index) => (
              <div key={work.id} className="work-block">
                <Divider orientation="left" className="work-divider">
                  Work Experience {index + 1}
                </Divider>

                <Form.Item label="Job Title" name={["work", index, "jobTitle"]} rules={[{ required: true, message: "Please enter job title" }]}>
                  <Input placeholder="Enter Job Title" />
                </Form.Item>

                <Form.Item label="Company" name={["work", index, "company"]} rules={[{ required: true, message: "Please enter company name" }]}>
                  <Input placeholder="Placeholder text" />
                </Form.Item>

                <div className="work-row">
                  <Form.Item label="From" name={["work", index, "from"]} rules={[{ required: true, message: "Select from year" }]}>
                    <Select placeholder="Select">
                      <Option value="2022">2022</Option>
                      <Option value="2023">2023</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="To" name={["work", index, "to"]} rules={[{ required: true, message: "Select to year" }]}>
                    <Select placeholder="Select">
                      <Option value="2023">2023</Option>
                      <Option value="2024">2024</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
            ))}

          {!noWorkExperience && (
            <Button type="dashed" icon={<PlusOutlined />} onClick={addWorkExperience} className="add-btn">
              Add Work Experience
            </Button>
          )}

          <Divider className="work-divider" />

          <Title level={5} className="declaration-title">
            Declarations
          </Title>

          <div className="declaration-group">
            <Text>Have you been an agent of any HMO, Life, Non-Life, Pre-Need Company before?</Text>
            <Form.Item name="hasBeenAgent" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Text>Are you still connected with the said company?</Text>
            <Form.Item name="stillConnected" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Text>Has there been any civil or criminal filed or pending case against you?</Text>
            <Form.Item name="hasCases" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Text>Have you ever been discharged or terminated from any employment?</Text>
            <Form.Item name="hasBeenTerminated" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="work-btn-group">
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

export default WorkExperience;
