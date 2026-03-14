import React, { useState } from "react";
import "./Diagramviewer.css";

const DiagramViewer = ({ image }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom(zoom + 0.2);
  const zoomOut = () => setZoom(zoom - 0.2);
  const reset = () => setZoom(1);

  return (
    <div className="diagram-viewer">

      <div className="controls">
        <button onClick={zoomIn} className="zoom-in">Zoom In</button>
        <button onClick={zoomOut} className="zoom-out">Zoom Out</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>

      <div className="image-container">
        {image ? (
          <img src={image} alt="diagram" className="w-full h-auto" />
        ) : (
          <p>No diagram uploaded</p>
        )}
      </div>

    </div>
  );
};

export default DiagramViewer;