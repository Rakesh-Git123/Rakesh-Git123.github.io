db.employees.insertOne({
    name:"John smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1234,
    location:["FL","OH"],
    date:Date()
})
db.employees.insertMany([
    {
        name:"Mike Joseph",
        email:"mike@gmail.com",
        department:"IT",
        salary:2456,
        location:["FL","TX"],
        date:Date()
    },
    {
        name:"Cathy G",
        email:"cathy@gmail.com",
        department:"IT",
        salary:3456,
        location:["AZ","TX"],
        date:Date()
    }
])

db.employees.find().skip(1) //Skin the first document
db.employees.find().skip(1).limit(1) //Only gives the second document
db.employees.find().sort({name:1}) //Sort based on name in ascending order
db.employees.find().sort({name:-1}) //Sort based on name in descending order

db.employees.find({department:"IT"});
db.employees.find({},{_id:0,name:1}); //Show all documents with name only
db.employees.find({},{_id:false,name:true}); //Show all documents with name only

db.employees.find({department:{$eq:"IT"}});
db.employees.find({salary:{$gt:300}});
db.employees.find({salary:{$gte:300}});
db.employees.find({salary:{$lte:300}});
db.employees.find({salary:{$ne:3000},department:{$eq:"IT"}}, {name:1});

//Display the top two highest paid employees
db.employees.find().sort({salary:-1}).limit(2);

