const mongoose = require('mongoose'); // Mongoose for MongoDB interactions
const DATABASE = `cec`;
const COLLECTION = `activity`;


// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/cec').then(() =>  console.log('Connected to MongoDB'));







// ACTIVITY 1 
// CREATE a new SCHEMA for a movie database with the following fields:
// title, year, rating, actor
// And Insert 2 new movie documents into the database




// Define your SCEHMA here
const activitySchema = new mongoose.Schema({
    // Write Your SChema Here

});

const movie = mongoose.model(COLLECTION, activitySchema);


// Insert 2 new movie documents into the database
// Write your code here

//movie.cre









