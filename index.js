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


// 2. READ 

// Before we read we need to Add some data to the database

// Adding a new user to the database
function addRandomUsers(){
    User.insertMany([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'David', age: 40 },
        { name: 'Eve', age: 45 },
        { name: 'Frank', age: 50 },
        { name: 'Grace', age: 55 },
        { name: 'Helen', age: 60 },
        { name: 'Ivy', age: 65 },
        { name: 'John', age: 70 }
    ]).then(() => {
        console.log('Users added to the database');
    }).catch((err) => {
        console.log(err);
    });
    
}
// COMMENT THIS FUNCTION AFTER FIRST RUN
//addRandomUsers();

// Reading all users
console.log("Reading all users");
User.find({}).then((users) => console.log(users))

// console.log("Reading all users with name Alice");
// User.find({ name: 'Alice' }).then((user) => console.log(user));

// console.log("Reading all users with age 30");
// // Reading a user by age
// User.find({ age: 30 }).then((user) => console.log(user));

// console.log("Reading all users with name Alice and age 25");
// User.find({ name: 'Alice', age: 25 }).then((user) => console.log(user));

// console.log("Reading all users with age greater than 30");
// User.find({ age: { $gt: 30 } }).then((user) => console.log(user));









