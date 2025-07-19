import jwt from "jsonwebtoken"
const SECRET= "sometext"

const token = jwt.sign({ name: "john", email: "john@gmail.com", role: "admin" }, SECRET, {
    expiresIn: "1h",
  });
  
  console.log("Generated token:", token);
  
  // Then verify it
  const decoded = jwt.verify(token, SECRET);
  console.log("Decoded token:", decoded);
  