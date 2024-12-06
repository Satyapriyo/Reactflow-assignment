# Reactflow assignment: React with FastAPI Backend

This project is a full-stack application using Vite and React for the frontend and FastAPI for the backend. It includes a drag-and-drop UI for creating pipelines and a backend service to process these pipelines.

## Table of Contents
- [Reactflow assignment: React with FastAPI Backend](#reactflow-assignment-react-with-fastapi-backend)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
  - [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
```
full-stack-projects/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── render.yaml
│
└── client/
    ├── src/
    ├── public/
    ├── package.json
    ├── vite.config.js
    └── tailwind.config.js

```


## Prerequisites

- [Node.js (version 16 or higher)](https://nodejs.org/en)
- [Python (version 3.11.3)](https://www.python.org/)
- [Vite](https://vitejs.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)

## Setup Instructions

### Backend Setup

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   python -m venv venv
   ```
2. **Create a Virtual Environment:**

    ```bash
    python -m venv venv
    ```
3. **Activate the Virtual Environment:** 
   
     ***On Windows:***
 
   ```bash
   .\venv\Scripts\activate
   ```

    **On macOS/Linux:**
    ```bash
    source venv/bin/activate
    ```
4. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
5. **Run the Backend Server:**
    ```bash
    uvicorn main:app --host 0.0.0.0 --port 8000
    ```
###  Frontend Setup

```bash
cd client
```
1. **Install Dependencies:**
    ```bash
    npm install
    ```
2. **Run the Frontend Development Server:**
    ```bash
    npm run dev
    ```
# Running the Application

- Ensure both the backend and frontend servers are running.Access the
- application by navigating to http://localhost: in your web browser.

## Environment Variables

Create a .env file in the **/backend** directory with the following content:
```bash
vite_url="http://localhost:5173"
```

Create a .env file in the **/client** directory with the following content:
```bash
VITE_API_URL="http://localhost:8000"
```

# Contributing
- Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
# License
This project is licensed under the MIT License.
