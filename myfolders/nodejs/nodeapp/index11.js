import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET = "12345";

app.use(express.json());

const authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) res.json({ message: "You are not authorized" });
  else {
    try{
        let data=jwt.verify(token,SECRET)
        req.user=data
        next()
    }catch(err){
        res.json({message:"Invalid token"})
    }
  }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(401).json({ success:false,message: 'Access denied: Admins only' });
    }
};

const users = [
  {
    name: "Rakesh",
    role:"admin",
    email: "rakesh@gmail.com",
    password: "rakesh",
  },
  {
    name: "Rahul",
    role:"user",
    email: "rahul@gmail.com",
    password: "rahul",
  },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const found = users.find((d) => d.email === email);
  if (found) {
    if (password !== found.password) {
      res.json({ succcess: false, message: "Password is incorrect" });
    } else {
      const token = jwt.sign({email,role:found.role}, SECRET, { expiresIn: "1h" });
      res.json({ user: found, token });
    }
  } else {
    res.json({ success: false, message: "USer not found" });
  }
});

app.get("/user",authenticate, (req, res) => {
  res.json(req.user); //Data of the authenticated user
});
app.get("/users",authenticate,isAdmin,(req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server started");
});
