const express = require ("express");
const mysql = require ("mysql");
const { send } = require("process");

// database connection string w/ relevant values
const db = mysql.createConnection ({
        host: "localhost",
        user: "root",
        password: "123456789",
        //establish a connection to a specific database
        database:  "salesorders"
});

// established a database connection
db.connect((err) =>{
        if (err){
            throw err;
        }
    console.log("Yahoo!  Your MySQL Database Connection Established Successfully!")
    });

//setup the connection
    const app = express();



//create a database
// app.get("/createDB", (req, res) => {
//     let mysql = "Create Database fsw140wk6fullstack";
//     //Execute the SQL Query
//     db.query(mysql, (err, result) => {
//         if (err){
//             throw err;
//         }
//         console.log(result);
//         res.send("fsw140wk6fullstack Database Successfully Created!");
//     });
// });

// //create a table
// app.get("/createDB", (req, res) => {
//     let mysql = "create table postings(id int auto_increments, title varchar(50), message(100, primary key (id))";
//     //Execute the SQL Query
//     db.query(mysql, (err, result) => {
//         if (err){
//             throw err;
//         }
//         console.log(result);
//         res.send("fsw140wk6fullstack Database Successfully Created!");
//     });
// });

//create = insert | Read = Select | Update = Update | Delete = Delete
//execute insert:query for the first two
app.post('/insertRow1', (req, res) => {
    let post = {title: "First Row", mesage: "This is my first row through EJS/Node/Js"}
    let mysql = "insert into employees set?";
    //run command
    db.query(mysql, (error, result => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send("(First Row inserted Successfully!");
    }));
});

//execute insert:query for the second two
// app.get('/insertRow2', (req, res) => {
//     let post = {title: "Second Row", mesage: "his is my Second row through EJS/Node/Js"}
//     let mysql = "insert into postings set?";
//     //run command
//     db.query(mysql, (err, result) => {
//         if (err){
//             throw err;
//         }
//         console.log(result);
//         res.send("(Second Row inserted Successfully!");
//     });
// });

//select command request for all rows
app.get("/selectAll", (req, res) => {
    let mysql ="select * from employees";
    //ececute the query
    db.query(mysql, (err, result) =>{
        if (err){
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});

//select command request to request a specific row
app.get("/selectOne/id", (req, res) => {
    let mysql = `select * from employees where id = ${req.params.id}`;
    //execute sql query
    db.query(mysql, (err,result)=> {
    if (err){
        throw err;
    }
    console.log(result); 
    res.send(result);
    });
});

//update command
app.put("/updateRow/id", (req, res) => {
    let newTitle = "Updated Title 1";
    let mysql = `Updated employees set title = "${newtitle}" where id = ${req.params.id}`;
    //execute sql query
    db.query(mysql, (err,result)=> {
    if (err){
        throw err;
    }
    console.log(result); 
    res.send("Specific Rows Updated  Successfully");
    });
});

//delete command
app.delete("/deleteOne/id", (req, res) => {
    let mysql = `Delete from employees where id = ${req.params.id}`;
    //execute sql query
    db.query(mysql, (err,result)=> {
    if (err){
        throw err;
    }
    console.log(result); 
    res.send("Specific Rows Deleted  Successfully");
    });
});
app.listen("5000", () =>{
    console.log("Yahoo! Your Local Web Server is Running Successfully");
});