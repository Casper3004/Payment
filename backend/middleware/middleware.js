const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")


function authMiddleware (req,res,next){

    const token = req.headers.authorization;

    if(!token || !token.startsWith("Bearer")){
        return res.status(403).json({
            msg:"Invalid"
        });
    }

    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.userName){
        req.userId = decodedValue.userId
        next();
    }
    else{
        res.status(403).json({
            msg:"Not found"
        });
    }
}



module.exports = {
    authMiddleware
}