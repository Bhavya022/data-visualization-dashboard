// backend/server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const insightRoutes = require('./routes/insightRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
//basic Route
app.get('/',(req,res)=>{
res.send('welcome to Data-Visualization-Dashboard')
})
// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api', insightRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
