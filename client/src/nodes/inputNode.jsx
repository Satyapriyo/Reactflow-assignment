// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div
      className="px-5 py-3 rounded-lg"
      style={{ border: "2px solid #455A64" }}
    >
      <div>
        <h2 className="p-1 font-bold text-center">Input</h2>
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
            value={inputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        style={{
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
  );
};
