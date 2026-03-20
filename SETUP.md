# YouTube Shorts Bot Setup Guide

## Installation Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/aysecitak27-dev/g.git
   cd g
   ```

2. **Install dependencies**:
   - For the **backend**:
     ```bash
     cd backend
     npm install
     ```
   - For the **frontend**:
     ```bash
     cd frontend
     npm install
     ```

## Configuration Steps
1. **Configure backend environment variables**:
   - Create a `.env` file in the `backend` directory and populate it with the following variables:
     ```bash
     YOUTUBE_API_KEY=your_youtube_api_key
     DATABASE_URL=your_database_url
     ```

2. **Configure frontend environment**:
   - Update the API endpoints in the frontend configuration file to point to your backend server.

## Running the Application
- **Start the backend**:
  ```bash
  cd backend
  npm start
  ```

- **Start the frontend**:
  ```bash
  cd frontend
  npm start
  ```

Navigate to `http://localhost:3000` in your browser to access the YouTube Shorts Bot application.