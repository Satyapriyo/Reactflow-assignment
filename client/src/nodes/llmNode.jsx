// llmNode.js

import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div
      className="px-5 py-3 rounded-lg"
      style={{ border: "2px solid #455A64" }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          top: `${100 / 3}%`,
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: `${200 / 3}%`,
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
      />
      <div>
        <h2 className="p-1 font-bold text-center">LLM</h2>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
        id={`${id}-response`}
      />
    </div>
  );
};
