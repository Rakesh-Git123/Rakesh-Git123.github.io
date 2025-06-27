db.employees.updateOne({email:"john@gmail.com"},{$set:{salary:2000}});
db.employees.updateMany({},{$set:{salary:5000}}); //Update all documents salary to 5000
db.employees.updateMany({},{$set:{salary:5000}},{upsert:true}); //update or not found than insert
db.employees.update
db.employees.updateMany({},{$unset:{salary:""}}); //Remove the salary field from all the documents
db.employees.updateMany({},{$push:{location:"DJ"}}) //insert location in location array
db.employees.updateMany({},{$addToSet:{location:"DJ"}}) //No duplicate items allowed
db.employees.updateMany({},{$pull:{location:"DJ"}}) //remove location in location array

db.employees.deleteMany({
    department:"IT"
})