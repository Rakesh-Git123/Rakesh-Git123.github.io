//db.users.insertOne({name:"John",age:21})
//db.users.find()
//db.users.findOne()
//db.users.drop()

db.users.insertOne({ name: "Amy", age: 25 });

db.users.insertMany([
  { name: "Shawn", age: 23 },
  { name: "Chastity", age: 27 },
]);