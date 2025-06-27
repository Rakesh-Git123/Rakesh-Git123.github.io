db.employees.find({ department: "IT" });

db.employees.find({ department: { $eq: "IT" } });

db.employees.find({ salary: { $gt: 3000 } });

db.employees.find({ salary: { $gte: 3000 } });

db.employees.find({ salary: { $lt: 3000 } });

db.employees.find({ salary: { $lte: 3000 } });

db.employees.find(
  { salary: { $ne: 3000 }, department: { $eq: "IT" } },
  { name: 1 }
);

db.employees
  .find({ salary: { $ne: 3000 }, department: { $eq: "IT" } }, { name: 1 })
  .limit(1);

db.employees.find({
  $and: [{ salary: { $gt: 3000 }, department: { $eq: "IT" } }],
});

db.employees.find({
  $or: [{ salary: { $gt: 3000 }, department: { $eq: "IT" } }],
});


//Display the top two highest pai