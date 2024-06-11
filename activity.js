const mongoose = require('mongoose'); // Mongoose for MongoDB interactions
const DATABASE = `cec`;
const COLLECTION = `activity`;


// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/'+DATABASE).then(() =>  console.log('Connected to MongoDB'));







// ACTIVITY 2 


// Define your SCEHMA here
const activitySchema = new mongoose.Schema({
    // Write Your SChema Here

});

const movie = mongoose.model(COLLECTION, activitySchema);



// Find the moveis of year 2024
// Find the movies with rating 5

// Write your code here

//movie.find ...









