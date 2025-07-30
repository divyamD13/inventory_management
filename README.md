# Inventory Management System

This is a full-stack inventory management application built with a Node.js backend and a React frontend. The application provides REST APIs to manage users and products, allowing for user authentication, product addition, quantity updates, and inventory retrieval.

## Project Structure

The project is organized into a monorepo structure with two main directories:
```bash
/inventory-management
├── backend/        # Node.js, Express, MongoDB
└── frontend/       # Vite, React, Tailwind CSS
```

## Docker Setup (Recommended)
This is the easiest way to run the entire application, including the database, with a single command.

### Prerequisites
Docker and Docker Compose must be installed and running on your machine.

### Running the Application
Navigate to the root directory of the project:

```bash
cd inventory-management
```

Build and start all services using Docker Compose:

```bash
docker-compose up --build
```

This command will build the Docker images for the frontend and backend, start the containers, and run the application.

### Accessing the Application
Frontend URL: http://localhost:5173

Backend API URL: http://localhost:8080

### Stopping the Application
Press Ctrl + C in the terminal where Docker Compose is running.

To remove the containers and network, run:

```bash
docker-compose down
```

## Backend Setup (Manual)
The backend is a Node.js server using the Express framework and MongoDB for the database.

### A Note on Backend Development
The backend for this project, including the database schema, API design, and server-side logic, was developed by me.

### Prerequisites
- Node.js (v20.x or higher recommended)

- MongoDB: A running instance of MongoDB is required. You can use a local installation or a cloud service like MongoDB Atlas.

### Installation & Setup
Navigate to the backend directory:

```bash
cd inventory-management/backend
```
### Install dependencies:

```bash
npm install
```
### Create an Environment File:
Create a file named .env in the backend directory and add the following configuration variables. Replace the placeholder values with your actual database credentials.
```bash
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@your_cluster_url/inventoryDB?retryWrites=true&w=majority
JWT_SECRET=a_strong_and_secret_key_for_jwt
```

## Start the Backend Server:
```bash
npm start
```
The server should now be running at http://localhost:8080.

## Frontend Setup (Manual)
The frontend is a modern web application built with Vite, React, and styled with Tailwind CSS.

### A Note on Frontend Development
The frontend for this project was generated with the assistance of AI / Large Language Models (LLMs) to quickly build a responsive and functional user interface based on the backend API specifications.

### Prerequisites
-Node.js (v20.x or higher recommended)

### Installation & Setup
Navigate to the frontend directory:
```bash
cd inventory-management/frontend
```

### Install dependencies:
```bash
npm install
```

### Create an Environment File:
Create a file named .env in the frontend directory. This file tells the frontend where to find the backend API.
```bash
VITE_API_BASE_URL=http://localhost:8080
```

### Start the Frontend Development Server:
```bash
npm run dev
```

The application will be accessible in your browser, typically at http://localhost:5173.
