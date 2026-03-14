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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div className="md:col-span-2">
          <DiagramViewer image={image} />
        </div>

        <ComponentList components={components} />

      </div>

    </div>
  );
};

export default Dashboard;