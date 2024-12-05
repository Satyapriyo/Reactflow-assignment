// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div
      className="px-5 py-3 rounded-lg"
      style={{ border: "2px solid #455A64" }}
    >
      <Handle
        type="target"
        style={{
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
        position={Position.Left}
        id={`${id}-value`}
      />
      <div>
        <h2 className="p-1 font-bold text-center">Output</h2>
      </div>
      <div>
        <label className="flex form-control w-full max-w-xs">
          <div className="label">Name:</div>
          <input
            type="text"
            placeholder="Type here"
            value={currName}
            className="input input-bordered w-full max-w-xs"
            onChange={handleNameChange}
          />
        </label>
        <label className="flex form-control w-full max-w-xs">
          <div className="label">Type:</div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={outputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
};
