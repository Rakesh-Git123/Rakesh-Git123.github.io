db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:3}
])

db.employees.aggregate([
    { $group:
        {
            _id: "department",
            total:{$sum:"$salary"}
        }
    }
])

db.employees.aggregate([
    {
        $project:{
            _id:0,name:1,
            salary:1,
            bonus:{$multiply:["$salary",2]}
        }
    }
])


//display name,email,salary of IT employees
db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,email:1,salary:1}}
])

//display annual salary of all employees
db.employees.aggregate([
    {$project:{name:1,annualSalary:{$multiply:["$salary",12]}}}
])

//Average age of all students
db.students.aggregate([
    {
      $group: {
        _id: null,
        avgAge: { $avg: "$age" }
      }
    }
  ])

  //Update the age of the student name "Alice Johnson" to 24
  db.students.updateOne({name:"Alice Johnson"},{$set:{age:24}})

  //Add a bew course "Chemistry" to a students courses array, only if it doesnt already exist
  db.students.updateMany({},{$addToSet:{courses:"Chemistry"}})

  //Increment age by 1 for all enrolled students
  db.students.updateMany(
    { enrolled: true },
    { $inc: { age: 1 } }
  )

  //Return only name and age for students, excluding _id
  db.students.find(
    {},
    { name: 1, age: 1, _id: 0 }
  )

  //Remove a course "Physics" from Alice's courses
  db.students.updateOne(
    { name: "Alice" },
    { $pull: { courses: "Physics" } }
  )


  //Address collection taking refrence from student collection
  db.address.insertMany([
    {studentId: ObjectId('685cdcc1e64e7c25ef748a5f'),city:"Punjab",country:"India"},
    {studentId:  ObjectId('685cdd57e64e7c25ef748a60'),city:"Dubai",country:"UAE"}

  ])
