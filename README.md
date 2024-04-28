# Restaurant Management Web App

This web application allows users to upload new restaurant information and view all restaurants stored in a MongoDB database. The frontend is built using Svelte, and the backend is implemented with Node.js using Express.js framework. The application uses port 3000 for the Node.js server.

## Installation

To use this application on your local PC, follow these steps:

### Prerequisites

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))
- MongoDB installed on your machine if you want to use your own database ([Download MongoDB](https://www.mongodb.com/try/download/community))

### Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Skyler-Quinn/Restaurants.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Restaurants
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Start the backend server:

   ```bash
   cd ../backend
   node index.js
   ```

5. Start the frontend server:

   ```bash
   cd ../frontend
   npm run dev
   ```

6. Open your web browser and visit the address provided by frontend terminal to access the application.

## Usage

- To upload a new restaurant, click on the "Add Restaurant" button and fill in the required information.
- To view all restaurants, navigate to the homepage or click on the "Show Restaurants" button.

## Troubleshooting

- In case of not showing restaurants after clicking "Show Restaurants", make sure your backend is running correctly.

