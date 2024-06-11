
![MongoDB Logo](https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png)

# A Workshop on Mongoose and MongoDB


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This repository contains the code for a workshop on Mongoose and Express JS. The workshop covers the following topics:



## Table of Contents

- [CODE](#installation)
- [License](#license)

# 3. DELETE Operation

- Model.deleteOne() - Deletes the first document that matches the filter
- Model.deleteMany() - Deletes all documents that match the filter


```javascript
// Delete the user with name 'Sachin'
User.deleteOne({name: 'Sachin'}).then((result) => { console.log(result);} );

// Delete all users with age 30
User.deleteMany({age: 30}).then((result) => { console.log(result);} );


```



## CODE USED FOR SECTION 3
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


// 3. DELETE query

User.create({name: 'John', age: 25}).then((result) => { console.log(result);});
User.create({name: 'Jane', age: 30}).then((result) => { console.log(result);});
User.create({name: 'Doe', age: 60}).then((result) => { console.log(result);});

// Deleting the user with the name 'John'
//User.deleteOne({name: 'John'}).then((result) =>  console.log(result));

// Deleting the user with the name 'Jane'
//User.deleteOne({name: 'Jane'}).then((result) =>  console.log(result)); 

// Delete one person Age 30

//User.deleteOne({age: 30}).then((result) =>  console.log(result));

// Deleting users with age greater than 40
//User.deleteMany({age: {$gt: 40}}).then((result) =>  console.log(result));

```   

## Activity


- Create  new documents in the Collection
```javascript
movie.create({movie: 'Inception', year: 2010, rating: 8.8}).then((result) => { console.log(result);});

movie.create({movie: 'The Dark Knight', year: 2008, rating: 9.0}).then((result) => { console.log(result);});

 movie.create({movie: 'Interstellar', year: 2014, rating: 8.6}).then((result) => { console.log(result);});
 movie.create({movie: 'Robot', year: 2006, rating: 5.5}).then((result) => { console.log(result);});
 movie.create({movie: 'Robot 2.0', year: 2018, rating: 6.5}).then((result) => { console.log(result);});
 movie.create({movie: 'Tarzan', year: 2020, rating: 5}).then((result) => { console.log(result);});
// Add more movies

```
1. Delete Movies with rating 5 
2. Delete Inception from collection
3. Delete Movies with rating less than 8.5


- activity.js

```javascript 
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
// move.delete ..

```

## License
This project is licensed under the MIT license. Please see the [LICENSE](LICENSE) file for more information.




