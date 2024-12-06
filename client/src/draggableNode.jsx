// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} btn `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "5rem",
        height: "2rem",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "0.8rem",

        justifyContent: "center",
        flexDirection: "column",
      }}
      draggable
    >
      <span>{label}</span>
    </div>
  );
};
