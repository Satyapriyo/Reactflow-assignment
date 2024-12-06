// llmNode.js

import { Handle, Position } from "reactflow";

export const PaymentNode = ({ id, data }) => {
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const name = capitalizeFirstLetter(data.nodeType);
  return (
    <div
      className="px-5 py-3 rounded-lg"
      style={{ border: "2px solid #455A64" }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-paymentin`}
        style={{
          top: `${100 / 3}%`,
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
      />
      <div>
        <h2 className="p-1 font-bold text-center">{name}</h2>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id+20}-paymentout`}
        style={{
          top: `${100 / 3}%`,
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
      />
    </div>
  );
};
