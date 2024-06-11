const mongoose = require('mongoose'); // Mongoose for MongoDB interactions


const DATABASE = `cec`;
const COLLECTION = `users`;

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/'+DATABASE).then(() =>  console.log('Connected to MongoDB'));


// Defining a schema for the 'User' model
// A user has a 'name' and an 'age', both fields are required
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Creating a model for the 'User' schema
const User = mongoose.model(COLLECTION, userSchema);


// 2. UPDATE Operation


// Update the user with name 'Sachin' to have age 30


// Syntax: Model.updateOne({ <filter> }, { <update> })
// The first argument is the filter to find the document to update
// The second argument is the update to be made

//User.create({name: 'Sachin', age: 50}).then((result) => { console.log(result);});

User.updateOne({name: 'Sachin'}, {age: 30}).then((result) => { console.log(result);});
//User.updateMany({age: 30}, {age: 31}).then((result) => { console.log(result);} );


