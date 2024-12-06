import { useStore } from "./store";
import toast, { Toaster } from "react-hot-toast";
export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const url = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    const payload = {
      nodes: nodes,
      edges: edges,
    };

    try {
      const response = await fetch(`${url}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Result from backend:", result);

      toast.success(`No. of Nodes ${result.num_nodes} , No. of Edges ${result.num_edges} , DAG ${result.is_dag}`,{duration:4000})
      // toast(
      //   `No. of Nodes ${result.num_nodes} \n\n No. of Edges ${result.num_edges} \n\n DAG ${result.is_dag}`,
      //   {
      //     duration: 4000,
      //   }
      // );
      // alert(
      //   `Nodes: ${result.num_nodes}, Edges: ${result.num_edges}, Is DAG: ${result.is_dag}`
      // );
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
};
