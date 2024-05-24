# data-visualization-dashboard
Data Visualization Dashboard
Table of Contents
Introduction
Features
Technologies Used
Setup and Installation
API Endpoints
Usage
Directory Structure
Contributing
License
Introduction
The Data Visualization Dashboard is a web application built using the MERN stack (MongoDB, Express, React, Node.js). It visualizes data from a given JSON dataset, providing insights through interactive charts and graphs. Users can filter the data using various criteria to explore specific aspects of the dataset.

Features
Interactive charts and graphs for data visualization
Dynamic filtering options
Uses MongoDB to store and retrieve data
RESTful API built with Node.js and Express
Frontend built with React
Various charting libraries supported (Chart.js, D3.js, etc.)
Technologies Used
Frontend: React, React Bootstrap
Backend: Node.js, Express
Database: MongoDB
Charting Libraries: Chart.js (others like D3.js, Plotly.js can be integrated)
HTTP Client: Axios
Setup and Installation
Prerequisites
Node.js (v14 or higher)
MongoDB (v4 or higher)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/data-visualization-dashboard.git
cd data-visualization-dashboard
Backend Setup:

bash
Copy code
cd backend
npm install
Start MongoDB:

Ensure MongoDB is running on your machine. If not, start it using:

bash

mongod
Seed the Database:

Load the provided JSON data into MongoDB. You can use a script or a tool like MongoDB Compass.

Start the Backend Server:

bash

npm start
Frontend Setup:

bash
Copy code
cd ../frontend
npm install
Start the Frontend Server:

bash

npm start
The frontend will be available at http://localhost:3000.

API Endpoints
GET /api/insights/filter
Fetch insights based on query parameters.

Query Parameters
endYear
topics
sector
region
pestle
source
swot
country
city
likelihood
intensity
relevance
year
url
Example
http

GET /api/insights/filter?country=United%20States
Usage
Open the Application:
Navigate to http://localhost:3000 in your web browser.

Filter Data:
Use the dropdown and input fields to filter the data. Click "Apply Filter" to see the results.

View Visualizations:
Explore various charts and graphs representing the filtered data.

Directory Structure
plaintext
Copy code
data-visualization-dashboard/
├── backend/
│   ├── controllers/
│   │   └── insightController.js
│   ├── models/
│   │   └── Insight.js
│   ├── routes/
│   │   └── insights.js
│   ├── utils/
│   │   └── filterHelper.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── Filter.js
│   │   │   ├── InsightList.js
│   │   │   ├── Visualization.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   └── dataProcessing.js
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
└── README.md
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

## Deploy Link Frontend
Open[https://resplendent-cucurucho-89ed8b.netlify.app/](https://resplendent-cucurucho-89ed8b.netlify.app/) 
