const mongoose = require('mongoose'); // Mongoose for MongoDB interactions


const DATABASE = `cec`;
const COLLECTION = `users`;

// Connecting to MongoDB
// The database is located at localhost:27017 and the database name is 'test'
mongoose.connect('mongodb://127.0.0.1:27017/'+DATABASE).then(() =>  console.log('Connected to MongoDB'));


// Defining a schema for the 'User' model
// A user has a 'name' and an 'age', both fields are required
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});


// Creating the 'User' model using the 'userSchema'
// The collection in the MongoDB database will be 'test'
const User = mongoose.model(COLLECTION, userSchema);

//1. CREATE OPERATION
// Creating a new user using Create method
User.create({ name: 'John Doe', age: 25 }).then((user) => console.log(user))


// Creating a new user using Save method

const adithya = new User({ name: 'Adithya',age: 22});
adithya.save()










