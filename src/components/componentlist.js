import React, { useState } from "react";
import "./componentlist.css";
const ComponentList = ({ components }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="component-list">
      <h2>Components</h2>
      <ul>
        {components.map((comp) => (
          <li
            key={comp.id}
            onClick={() => setSelected(comp.id)}
            className={selected === comp.id ? "selected" : ""}
          >
            {comp.name}
          </li>
        ))}
      </ul>

    </div>
  );
};
export default ComponentList;