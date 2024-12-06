// toolbar.js

import { DraggableNode } from "./draggableNode";
const paymentGateways = [
  {
    type: "gpay",
    label: "Gpay",
  },
  {
    type: "wise",
    label: "Wise",
  },
  {
    type: "paypal",
    label: "Paypal",
  },
  {
    type: "crypto",
    label: "Crypto",
  },
  {
    type: "card",
    label: "Card",
  },
];
export const PipelineToolbar = () => {
  return (
    <div className="" style={{ padding: "10px" }}>
      <div
        className="mt-10"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {paymentGateways.map(({ type, label }) => {
          return <DraggableNode type={type} label={label} />;
        })}
      </div>
    </div>
  );
};
