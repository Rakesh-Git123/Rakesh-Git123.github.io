import bcrypt from "bcryptjs"
const pwd="rakesh@123"
// const hashedpwd=await bcrypt.hash(pwd,10)
// console.log(hashedpwd);

const check=await bcrypt.compare(pwd,"$2b$10$.4V/2PJr3wn4/SdjSeJzSunK.amT8EllJUOh4LmLo0kAaBaSCuLO6")
console.log(check);

