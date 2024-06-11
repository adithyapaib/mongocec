
![MongoDB Logo](https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png)

# A Workshop on Mongoose and MongoDB


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This repository contains the code for a workshop on Mongoose and Express JS. The workshop covers the following topics:



## Table of Contents

- [CODE](#installation)
- [License](#license)

# 4. Project

- A simple CRUD App using Mongoose and MongoDB




## CODE USED FOR SECTION 4
- index.js

```javascript
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/crudapp').then(() => { console.log('Connected to MongoDB') });

const userSchema = new mongoose.Schema({
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        default: 'https://robohash.org/paiadithya26@gmail.com'
    }
}, {
    strict: true
});

const User = mongoose.model('userinfo', userSchema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(__dirname + '/public/index.html');
}
);

app.get('/all', (req, res) => {
    User.find().then((users) => {
        // send json response
        res.json(users);
    });
}
);

app.post('/create', (req, res) => {
    let profilepic = req.body.profilepic;
    if (req.body.profilepic == '') {
        profilepic = 'https://robohash.org/' + req.body.email;
    }
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        rollno: req.body.rollno,
        email: req.body.email,
        profilepic: profilepic
    });

    user.save().then(() => {
        res.redirect(`/?message=Success Inserted&name=` + req.body.name + `&age=` + req.body.age + `&rollno=` + req.body.rollno + `&email=` + req.body.email + `&profilepic=` + profilepic + `&operation=CREATED`);
    }).catch((err) => {
        res.redirect(`/?error=Error Inserting ${req.body.name}; Duplicate ID`);
    });
}
);

app.post('/read', (req, res) => {
    User.find({ rollno: req.body.rollno }).then((users) => {
        // if user not found
        if (users.length == 0) {
            res.redirect(`/?error=No user found with rollno ${req.body.rollno}` + `&operation=read`);
        }
        else {
            res.redirect(`/?message=Success Found&name=` + users[0].name + `&age=` + users[0].age + `&rollno=` + users[0].rollno + `&email=` + users[0].email + `&profilepic=` + users[0].profilepic + `&operation=READ`);
        }
    });
}
);

app.post('/delete', (req, res) => {
    // Check if roll no exists 
    User.find({ rollno: req.body.rollno }).then((users) => {
        if (users.length == 0) {
            res.redirect(`/?error=No user found with rollno ${req.body.rollno}`);
        }
        else {
            User.deleteOne({ rollno: req.body.rollno }).then(() => {
                res.redirect(`/?message=Success Deleted&name=` + users[0].name + `&age=` + users[0].age + `&rollno=` + users[0].rollno + `&email=` + users[0].email + `&profilepic=` + users[0].profilepic + `&operation=Deleted`);
            });
        }
    });

});

app.post('/update', (req, res) => {
    User.find({ rollno: req.body.rollno }).then((users) => {
        if (users.length == 0) {
            res.redirect(`/?error=No user found with rollno ${req.body.rollno}`);
        }
        else {
            let profilepic = req.body.profilepic;
            if (req.body.profilepic == '') {
                profilepic = 'https://robohash.org/' + req.body.email;
            }

            User.updateOne({ rollno: req.body.rollno }, {
                name: req.body.name,
                age: req.body.age,
                rollno: req.body.rollno,
                email: req.body.email,
                profilepic: profilepic
            }).then(() => {
                res.redirect(`/?message=Success Updated&name=` + req.body.name + `&age=` + req.body.age + `&rollno=` + req.body.rollno + `&email=` + req.body.email + `&profilepic=` + req.body.profilepic + `&operation=Updated`);
            });
        }
    });
}
);

app.listen(3000, () => { console.log('Server is running on port 3000')});

```   
- index.html
``` html

<!--
This is the main HTML file for the CRUD operations application.

It contains the following sections:
- Metadata and title
- Stylesheet link
- Message section
- Data input textarea
- CRUD operations section (Create, Read, Update, Delete)
- All Data section (table to display data)
- JavaScript code to fetch data and handle URL parameters

Please note that this is a static HTML file and requires a server-side implementation to handle the CRUD operations and data storage.
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD OPPERTATIONS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Message Section -->
    <section class="msg"> 
    </section>

    <!-- Data Input Textarea -->
    <fieldset id="data">
        <legend>LOG</legend>
    </fieldset>

    <!-- CRUD Operations Section -->
    <div class="operations">
        <!-- Create Operation -->
        <div class="create">
            <fieldset>
                <legend>CREATE</legend>
                <form action="/create" method="post">
                    <input type="number" name="rollno" id="rollno" placeholder="Enter Unique Roll No*" required><br>
                    <input type="text" name="name" id="name" placeholder="Name*"required> <br>
                    <input type="number" name="age" id="age" placeholder="Age*" required min="0" max="125"><br>
                    <input type="text" name="email" id="email" placeholder="Email*"required><br>
                    <input type="text" name="profilepic" id="profile" placeholder="Profile Picture"><br>
                    <button type="submit" class="btn">Create</button>
                </form>
            </fieldset>
        </div>

        <!-- Read Operation -->
        <div class="read">
            <fieldset>
                <legend>READ</legend>
                <form action="/read" method="post">
                    <input type="text" name="rollno" id="id" placeholder="Enter the Roll No"> <br>
                    <button type="submit" class="btn">Read</button>
                </form>
            </fieldset>
        </div>

        <!-- Update Operation -->
        <div class="update box">
            <fieldset>
                <legend>UPDATE</legend>
                <form action="/update" method="post">
                    <input type="number" name="rollno" id="rollno" placeholder="Enter Roll No To Be Updated"><br>
                    <input type="text" name="name" id="name" placeholder="Name" required> <br>
                    <input type="number" name="age" id="age" placeholder="Age" required><br>
                    <input type="text" name="email" id="email" placeholder="Email" required><br>
                    <input type="text" name="profilepic" id="profile" placeholder="Profile Picture"><br>
                    <button type="submit" class="btn">Update</button>
                </form>
            </fieldset>
        </div>

        <!-- Delete Operation -->
        <div class="delete box">
            <fieldset>
                <legend>DELETE</legend>
                <form action="/delete" method="post">
                    <input type="text" name="rollno" id="id" placeholder="Enter Roll No To Be Deleted"> <br>
                    <button type="submit" class="btn">Delete</button>
                </form>
            </fieldset>
        </div>
    </div>

    <!-- All Data Section -->
    <div class="alldata">
        <h2>All Data</h2>
        <table>
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Profile Picture</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <script>
            // Fetch data from /all and display it in the table
            fetch('/all')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const table = document.querySelector('table tbody');
                data.forEach(user => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${user.rollno}</td>
                        <td>${user.name}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.profilepic}" alt="Profile Picture"></td>
                    `;
                    table.appendChild(tr);
                });
            })
            .catch(err => console.log(err));
        </script>
    </div>

    <script>
        // Handle URL parameters
        const url = new URL(window.location.href);
        const message = url.searchParams.get('message');
        const name = url.searchParams.get('name');
        const age = url.searchParams.get('age');
        const error = url.searchParams.get('error');
        const rollno = url.searchParams.get('rollno');
        const email = url.searchParams.get('email');
        const profilepic = url.searchParams.get('profilepic');
        const operation = url.searchParams.get('operation');
        console.log(message); 
        if (message) {
            document.querySelector('.msg').style.display = 'block';
            document.querySelector('.msg').innerHTML = message;
            document.querySelector('.msg').classList.add('green');
        }
        if (name && age && rollno && email) {
            document.querySelector('#data').innerHTML = `
                <ul>
                    <b>${operation}:</b>
                    <li>Name: ${name}</li>
                    <li>Age: ${age}</li>
                    <li>Roll No: ${rollno}</li>
                    <li>Email: ${email}</li>
                    <li>Profile Picture: ${profilepic}</li>
                </ul>
            `;
                        // Insert a card at the top of the page with user info
            // const card = document.createElement('div');
            // card.classList.add('card');
            // card.innerHTML = `
            //  <img src="${profilepic}" alt="Profile Picture">
            //     <h2>${name}</h2>
            //     <p>Age: ${age}</p>
            //     <p>Roll No: ${rollno}</p>
            //     <p>Email: ${email}</p>
            // `;
            //document.body.insertBefore(card, document.querySelector('.operations'));

            
            if(operation == 'Deleted'){
                card.style.backgroundColor = 'red'; 
            }
            else if(operation == 'Updated'){
                card.style.backgroundColor = 'green'; 
            }
            else if(operation == 'Created'){
                card.style.backgroundColor = 'blue'; 
            }
            if(operation=="READ"){
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${profilepic}" alt="Profile Picture">
                <h2>${name}</h2>
                <p>Age: ${age}</p>
                <p>Roll No: ${rollno}</p>
                <p>Email: ${email}</p>
                `;
                document.body.insertBefore(card, document.querySelector('.operations'));

            }


        }
        if (error) {
            document.querySelector('.msg').innerHTML = error;
            document.querySelector('.msg').classList.remove('green');
            document.querySelector('.msg').classList.add('red');
            setTimeout(() => {
                window.location.href = '/';
            }, 5000);
        }
        // Display none to message after 5 seconds
        setTimeout(() => {
            document.querySelector('.msg').style.display = 'none';
        }, 5000);
    </script>
</body>
</html>

```

## Activity

1. Modify the Delete operation to delete the Users By Name
2. Modify the Update operation to update the Users By Name
3. Add a new field to the User Schema called "address" and update the Create operation to accept the address field
4. Add a new field to the User Schema called "phone" and update the Create operation to accept the phone field


## Using MongoDB in the URL SHortner Project

- Update the code in the URL Shortner Project to use MongoDB instead of the file system to store the URLs


- Link to project: [Express Project](https://github.com/adithyapaib/cecexpress)


## License
This project is licensed under the MIT license. Please see the [LICENSE](LICENSE) file for more information.




