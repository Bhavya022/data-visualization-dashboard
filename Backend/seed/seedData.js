const Insight = require('../models/Insight');
const jsonData = require('../jsondata.json');
const connectDB = require('../config/database');
const mongoose = require('mongoose');

// Function to seed data into the database
const seedData = async () => {
    try {
        // Connect to the MongoDB database
        await connectDB();

        // Clear existing data from the collection
        await Insight.deleteMany();

        // Insert new data from the JSON file
        const insertedData = await Insight.insertMany(jsonData);
        console.log(`Successfully seeded ${insertedData.length} documents.`);
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Close the MongoDB connection
        mongoose.disconnect();
        console.log('Database connection closed.');
    }
};

// Call the seedData function to initiate data seeding
seedData();
