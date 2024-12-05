from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    vite_url: str
    class Config:
        env_file = ".env"

settings = Settings()

# print(settings.vite_url)

app = FastAPI()






app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.vite_url],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

# Define the request schema
class PipelineData(BaseModel):
    nodes: list
    edges: list

@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
   
    G = nx.DiGraph()
       
    for node in data.nodes:
        G.add_node(node["id"])

    
    for edge in data.edges:
        G.add_edge(edge["source"], edge["target"])
    
    is_dag = nx.is_directed_acyclic_graph(G)
    

    return {
        "num_nodes": G.number_of_nodes(),
        "num_edges": G.number_of_edges(),
        "is_dag": is_dag
    }

