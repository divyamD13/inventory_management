# Inventory Management System

This is a full-stack inventory management application built with a Node.js backend and a React frontend. The application provides REST APIs to manage users and products, allowing for user authentication, product addition, quantity updates, and inventory retrieval.

## Project Structure

The project is organized into a monorepo structure with two main directories:

/inventory-management
├── backend/        # Node.js, Express, MongoDB
└── frontend/       # Vite, React, Tailwind CSS


---
## Backend Setup

The backend is a Node.js server using the Express framework and MongoDB for the database.

### **A Note on Backend Development**

The backend for this project, including the database schema, API design, and server-side logic, was developed by me.

### **Prerequisites**

* **Node.js** (v20.x or higher recommended)
* **MongoDB**: A running instance of MongoDB is required. You can use a local installation or a cloud service like MongoDB Atlas.

### **Installation & Setup**

1.  **Navigate to the backend directory:**
    ```bash
    cd inventory-management/backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an Environment File:**
    Create a file named `.env` in the `backend` directory and add the following configuration variables. **Replace the placeholder values with your actual database credentials.**

    ```env
    PORT=8080
    MONGO_URI=mongodb+srv://<username>:<password>@your_cluster_url/inventoryDB?retryWrites=true&w=majority
    JWT_SECRET=a_strong_and_secret_key_for_jwt
    ```

4.  **Start the Backend Server:**
    ```bash
    npm start
    ```
    The server should now be running at `http://localhost:8080`.

---
## Frontend Setup

The frontend is a modern web application built with Vite, React, and styled with Tailwind CSS.

### **A Note on Frontend Development**

The frontend for this project was generated with the assistance of AI / Large Language Models (LLMs) to quickly build a responsive and functional user interface based on the backend API specifications.

### **Prerequisites**

* **Node.js** (v20.x or higher recommended)

### **Installation & Setup**

1.  **Navigate to the frontend directory:**
    ```bash
    cd inventory-management/frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an Environment File:**
    Create a file named `.env` in the `frontend` directory. This file tells the frontend where to find the backend API.

    ```env
    VITE_API_BASE_URL=http://localhost:8080
    ```

4.  **Start the Frontend Development Server:**
    ```bash
    npm run dev
    ```
    The application will be accessible in your browser, typically at `http://localhost:5173`.