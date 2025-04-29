import React from "react";
import { Upload, Button, Typography, Form, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./DocumentUpload.css";

const { Title, Text, Link } = Typography;

const DocumentUpload = () => {
  const [form] = Form.useForm();

  const uploadProps = {
    beforeUpload: () => false, // Don't upload automatically
    maxCount: 1,
  };

  const handleSubmit = (values) => {
    console.log("Uploaded Documents:", values);
  };

  return (
    <div className="doc-upload-container">
      {/* <div className="doc-upload-card"> */}
      <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, maxWidth: `${window.innerWidth < 600 ? "100%" : "80"}` }}>
        <Title level={3} style={{ color: "#FF6A00", marginBottom: 24, fontWeight: "500" }}>
          Agent Accreditation
        </Title>

        <div className="doc-download">
          <Text>Download Form</Text>
          <p>Click here to open the form link, fill it out and submit.</p>
          <Link href="#" target="_blank" className="doc-link">
            Agent Contract Form
          </Link>
        </div>

        <Form form={form} layout="vertical" onFinish={handleSubmit} className="doc-upload-form">
          <Form.Item label="Agent Contract Form" name="agentContractForm" rules={[{ required: true, message: "Please upload Agent Contract Form" }]}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} className="browse-btn">
                Browse
              </Button>
            </Upload>
          </Form.Item>

          <Text className="doc-note">Maximum 2 MB. PNG or JPG files only</Text>

          <div className="doc-download">
            <Text>Download</Text>
            <p>Please download form from below to fill them out. You will require scanned copy to upload.</p>
            <Link href="#" target="_blank" className="doc-link">
              UBP ePAYCARD account opening form
            </Link>
          </div>

          <Form.Item label="UBP EPAYCARD Account Opening Form" name="epaycardForm" rules={[{ required: true, message: "Please upload EPAYCARD Form" }]}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} className="browse-btn">
                Browse
              </Button>
            </Upload>
          </Form.Item>

          <Text className="doc-note">Maximum 2 MB. PNG or JPG files only</Text>

          <Title level={5} className="doc-section-title">
            ID Proof
          </Title>

          <Form.Item label="TIN ID" name="tinId" rules={[{ required: true, message: "Please upload TIN ID" }]}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} className="browse-btn">
                Browse
              </Button>
            </Upload>
          </Form.Item>

          <Text className="doc-note">Maximum 2 MB. PNG or JPG files only</Text>

          <Form.Item label="Valid ID (Government Issued)" name="validId" rules={[{ required: true, message: "Please upload Valid ID" }]}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} className="browse-btn">
                Browse
              </Button>
            </Upload>
          </Form.Item>

          <Text className="doc-note">Maximum 2 MB. PNG or JPG files only</Text>

          <Title level={5} className="doc-section-title">
            For Agency Leaders
          </Title>

          <Form.Item label="NBI Clearance Form" name="nbiClearance">
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} className="browse-btn">
                Browse
              </Button>
            </Upload>
          </Form.Item>

          <Text className="doc-note">Maximum 2 MB. PNG or JPG files only</Text>

          <Title level={5} className="doc-section-title">
            Other Documents
          </Title>

          <Form.Item label="2x2 Size Photo (White Background)" name="photo" rules={[{ required: true, message: "Please upload 2x2 Photo" }]}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} className="browse-btn">
                Browse
              </Button>
            </Upload>
          </Form.Item>

          <Text className="doc-note">Size 2"x2". Maximum 2 MB. PNG or JPG files only</Text>

          <Form.Item
            name="declaration"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("You must accept the declaration"))),
              },
            ]}
          >
            <Checkbox className="declaration-text">I hereby declare that the information provided above is true and correct to the best of my knowledge and ability.</Checkbox>
          </Form.Item>

          <div className="doc-btn-group">
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

export default DocumentUpload;
