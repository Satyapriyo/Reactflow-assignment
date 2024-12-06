// textNode.js

import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  const detectVariables = (text) => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(variableRegex)];
    const uniqueVariables = Array.from(
      new Set(matches.map((match) => match[1]))
    );
    setVariables(uniqueVariables);
  };
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    detectVariables(newText);
  };
  useEffect(() => {
    autoResize();
    detectVariables(currText);
  }, [currText]);

  return (
    <div
      className="px-5 py-3 rounded-lg"
      style={{ border: "2px solid #455A64" }}
    >
      <div>
        <h2 className="p-1 font-bold text-center">Text</h2>
      </div>
      <div>
        <label className="flex form-control w-full max-w-xs">
          <div className="label">Text:</div>
          <textarea
            type="text"
            ref={textareaRef}
            onInput={autoResize}
            className="nodrag nopan textarea textarea-bordered"
            placeholder="Write your text here"
            value={currText}
            style={{ display: "block", overflow: "hidden", resize: "none" }}
            onChange={handleTextChange}
          />
        </label>
      </div>
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          id={`${id}-text`}
          style={{
            backgroundColor: "white",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            border: "3px solid black",
            top: `${(index + 1) * 20}px`,
          }}
          type="target"
          position={Position.Left}
        >
          <span className="-ml-14 relative -top-5">{variable}</span>
        </Handle>
      ))}
      <Handle
        style={{
          backgroundColor: "white",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "3px solid black",
        }}
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
