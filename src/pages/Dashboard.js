import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/Diagramviewer";
import ComponentList from "../components/componentlist";
import { getComponents } from "../services/api";
import "./Dashboard.css"

const Dashboard = () => {

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [components, setComponents] = useState([]);

  useEffect(() => {
    getComponents().then((data) => setComponents(data));
  }, []);

  return (
    <div className="p-6">

      <UploadBox
        setImage={setImage}
        fileName={fileName}
        setFileName={setFileName}
      />
               <div className="layout-container">

  <div className="viewer">
    <DiagramViewer image={image} />
  </div>

  <div className="components">
    <ComponentList components={components} />
  </div>

</div>
    </div>
  );
};
export default Dashboard;