import React, { useState } from "react";
import { Form, Upload, Button, Row, Col, Typography, Checkbox } from "antd";
import { UploadOutlined, DeleteOutlined, FileImageOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const DocumentUploadBroker = () => {
  const [form] = Form.useForm();
  const [uploadedFiles, setUploadedFiles] = useState({
    tinCertificate: null,
    residenceCertificate: null,
    secRegistration: null,
    icLicense: null,
  });

  const onFinish = (values) => {
    console.log("Uploaded Documents:", values, uploadedFiles);
  };

  const handleFileChange = (fieldName, info) => {
    if (info.file.status !== "removed") {
      setUploadedFiles({
        ...uploadedFiles,
        [fieldName]: info.file,
      });
    }
  };

  const handleRemove = (fieldName) => {
    setUploadedFiles({
      ...uploadedFiles,
      [fieldName]: null,
    });
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJpgOrPng) {
        alert("You can only upload JPG/PNG file!");
      }
      if (!isLt2M) {
        alert("Image must be smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M ? true : Upload.LIST_IGNORE;
    },
    showUploadList: false,
  };

  const renderUploadedFile = (fieldName) => {
    const file = uploadedFiles[fieldName];
    if (!file) return null;
    return (
      <div
        style={{
          marginTop: 8,
          backgroundColor: "#fff",
          padding: 12,
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <FileImageOutlined style={{ color: "#FF6A00", fontSize: 24 }} />
          <Text>{file.name}</Text>
        </div>
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} onClick={() => handleRemove(fieldName)} />
      </div>
    );
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8, width: window.innerWidth < 600 ? "100%" : "60%" }}>
      <Title level={3} style={{ color: "#FF6A00", marginBottom: 12, fontWeight: "500" }}>
        Broker Accreditation
      </Title>

      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="TIN ID" name="tinCertificate" rules={[{ required: true, message: "Please upload TIN Certificate" }]}>
              <>
                <Upload {...uploadProps} onChange={(info) => handleFileChange("tinCertificate", info)}>
                  <Button style={{ backgroundColor: "#FF6A00", color: "#fff", border: "none" }}>Browse</Button>
                </Upload>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Maximum 2 MB. PNG or JPG files only
                </Text>
                {renderUploadedFile("tinCertificate")}
              </>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Company Residence Certificate" name="residenceCertificate" rules={[{ required: true, message: "Please upload Company Residence Certificate" }]}>
              <>
                <Upload {...uploadProps} onChange={(info) => handleFileChange("residenceCertificate", info)}>
                  <Button style={{ backgroundColor: "#FF6A00", color: "#fff", border: "none" }}>Browse</Button>
                </Upload>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Maximum 2 MB. PNG or JPG files only
                </Text>
                {renderUploadedFile("residenceCertificate")}
              </>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="SEC Registration" name="secRegistration" rules={[{ required: true, message: "Please upload SEC Registration" }]}>
              <>
                <Upload {...uploadProps} onChange={(info) => handleFileChange("secRegistration", info)}>
                  <Button style={{ backgroundColor: "#FF6A00", color: "#fff", border: "none" }}>Browse</Button>
                </Upload>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Maximum 2 MB. PNG or JPG files only
                </Text>
                {renderUploadedFile("secRegistration")}
              </>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="IC Licence" name="icLicense" rules={[{ required: true, message: "Please upload IC License" }]}>
              <>
                <Upload {...uploadProps} onChange={(info) => handleFileChange("icLicense", info)}>
                  <Button style={{ backgroundColor: "#FF6A00", color: "#fff", border: "none" }}>Browse</Button>
                </Upload>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Maximum 2 MB. PNG or JPG files only
                </Text>
                {renderUploadedFile("icLicense")}
              </>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="declaration"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("You must accept the declaration"))),
                },
              ]}
            >
              <Checkbox style={{ color: "#4A5259" }}>
                I hereby declare that the information provided above is true and correct to the best of my knowledge and ability and that I shall conduct myself in accordance with all the Rules and Regulations and Company Policies of Insular Health
                Care, at all times.
              </Checkbox>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <Button
            onClick={() => console.log("Go back clicked")}
            style={{
              borderColor: "#00B2FF",
              color: "#00B2FF",
              width: 100,
            }}
          >
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#FF6A00",
              borderColor: "#FF6A00",
              width: 100,
            }}
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DocumentUploadBroker;
