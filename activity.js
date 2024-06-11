const mongoose = require('mongoose'); // Mongoose for MongoDB interactions
const DATABASE = `cec`;
const COLLECTION = `activity`;


// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/'+DATABASE).then(() =>  console.log('Connected to MongoDB'));







// ACTIVITY 3

// Create a new document
//movie.create({movie: 'Inception', year: 2010, rating: 8.8}).then((result) => { console.log(result);});
// movie.create({movie: 'The Dark Knight', year: 2008, rating: 9.0}).then((result) => { console.log(result);});
// movie.create({movie: 'Interstellar', year: 2014, rating: 8.6}).then((result) => { console.log(result);});

// Delete Movies with rating 5 
// Delete Movies with rating less than 8.5


// Define your SCEHMA here
const activitySchema = new mongoose.Schema({
    movie: String,
    year: Number,
    rating: Number
});

const movie = mongoose.model(COLLECTION, activitySchema);


// Write your DELETE query here
// move.delet ..







