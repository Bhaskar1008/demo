import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useParams, useHistory } from "react-router-dom";

// import EducationalDetails from "../Agent/EducationalDetails";
// import BankingDetails from "../Agent/BankingDetails";
import LoginHeader from "../../components/OONA/LoginHeader/LoginHeader";
import PersonalDetailsBroker from "./PersonalDetails";
import CompanyRepresentativeDetails from "./CompanyRepresentative";
import DocumentUploadBroker from "./DocumentUploadBroker";
import BrokerStatus from "./BrokerStatus";
import "./BrokerMain.css";
// import WorkExperience from "./WorkExperience";
// import DocumentUpload from "./DocumentUpload";
// import StatusPage from "./StatusPage";

const BrokerMainApp = () => {
  const history = useHistory();
  const { tabKey } = useParams();
  const [activeKey, setActiveKey] = useState(tabKey || "companyDetails");

  const sideTabs = [
    { label: "Company Details", key: "companyDetails", content: <PersonalDetailsBroker /> },
    { label: "Representative Details", key: "representativeDetails", content: <CompanyRepresentativeDetails /> },
    { label: "Document Upload", key: "documentUpload", content: <DocumentUploadBroker /> },
    { label: "Status", key: "status", content: <BrokerStatus /> },
  ];
  console.log("Tab not found,------------ redirecting to /agent/personalDetails");
  useEffect(() => {
    const exists = sideTabs.find((tab) => tab.key === tabKey);
    console.log("Tab not found,------------ redirecting to /agent/companyDetails");
    if (!exists) {
      console.log("Tab not found, redirecting to /agent/companyDetails");
      history.replace("/broker/companyDetails");
    } else {
      setActiveKey(tabKey);
    }
  }, [tabKey, history]);

  const onTabChange = (key) => {
    setActiveKey(key);
    history.push(`/broker/${key}`);
  };

  const activeTab = sideTabs.find((tab) => tab.key === activeKey);
  if (!activeTab) {
    console.error("No active tab found for key:", activeKey);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative", backgroundColor: "#FFFFFF" }}>
      <LoginHeader style={{ zIndex: 1000 }} />
      <div className="agentMainContainer" style={{ display: "flex", flex: 1, marginTop: "60px", overflow: "hidden" }}>
        <div className="tab-container">
          <Tabs
            tabPosition={window.innerWidth < 768 ? "top" : "left"}
            activeKey={activeKey}
            onChange={onTabChange}
            items={sideTabs.map(({ label, key }, index) => ({
              label:
                window.innerWidth < 768 ? (
                  <div className={`mobile-tab-label ${activeKey === key ? "active" : ""}`}>
                    <span className="tab-index-circle">{index + 1}</span>
                    {activeKey === key && <span className="tab-label-text">{label}</span>}
                  </div>
                ) : (
                  label
                ),
              key,
            }))}
            className="custom-vertical-tabs"
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: `${window.innerWidth < 600 ? "0px" : "20px"}`,
            background: "#FFFFFF",
            overflowY: "auto",
            height: "calc(100vh - 60px)",
          }}
          className="tab-content"
        >
          {activeTab ? activeTab.content : <div style={{ color: "red" }}>No content available for {activeKey}</div>}
        </div>
      </div>
    </div>
  );
};

export default BrokerMainApp;
