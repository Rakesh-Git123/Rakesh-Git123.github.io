import jwt from "jsonwebtoken";
const SECRET = "12345";
export const authenticate = (req, res, next) => {
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
  
  export const authorize = (req, res, next) => {
      if (req.user && req.user.role === 'admin') {
          next();
      } else {
          return res.status(401).json({ success:false,message: 'Access denied: Admins only' });
      }
  };