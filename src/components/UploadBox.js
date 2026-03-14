import React from "react";
import "./UploadBox.css";

const UploadBox = ({ setImage, fileName, setFileName }) => {

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div className="upload-box">
      <input type="file" accept="image/*" onChange={handleUpload} />
      {fileName && <span>Uploaded: {fileName}</span>}
    </div>
  );
};

export default UploadBox;