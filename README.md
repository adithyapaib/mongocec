
![MongoDB Logo](https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png)

# A Workshop on Mongoose and MongoDB


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This repository contains the code for a workshop on Mongoose and Express JS. The workshop covers the following topics:



## Table of Contents

- [CODE](#installation)
- [License](#license)

# 3. UPDATE OPERATIONS

- Model.updateOne()
- Model.updateMany()

## CODE USED FOR SECTION 1 
- index.js

```javascript

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

```   

## Activity


- Create a new document
```javascript
movie.create({movie: 'Inception', year: 2010, rating: 8.8}).then((result) => { console.log(result);});

movie.create({movie: 'The Dark Knight', year: 2008, rating: 9.0}).then((result) => { console.log(result);});

 movie.create({movie: 'Interstellar', year: 2014, rating: 8.6}).then((result) => { console.log(result);});
```
1. Update the rating of the movie 'Inception' to 9.2
2. Update the rating of the movie Interstellar to 10


- activity.js
```javascript 
const mongoose = require('mongoose'); 
const DATABASE = `cec`;
const COLLECTION = `activity`;

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/'+DATABASE).then(() =>  console.log('Connected to MongoDB'));

// ACTIVITY 3

// Create a new document
//movie.create({movie: 'Inception', year: 2010, rating: 8.8}).then((result) => { console.log(result);});
// movie.create({movie: 'The Dark Knight', year: 2008, rating: 9.0}).then((result) => { console.log(result);});
// movie.create({movie: 'Interstellar', year: 2014, rating: 8.6}).then((result) => { console.log(result);});

// Update the rating of the movie 'Inception' to 9.2
// Update the rating of the movie Interstellar to 10


// Define your SCEHMA here
const activitySchema = new mongoose.Schema({
    movie: String,
    year: Number,
    rating: Number
});

const movie = mongoose.model(COLLECTION, activitySchema);


// Write your UPDATE query here
// move.updat ..
```

## License
This project is licensed under the MIT license. Please see the [LICENSE](LICENSE) file for more information.




