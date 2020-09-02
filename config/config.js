const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token")

    if(!token) {
        return res.status(401).json({
            message: "What are you up to?",
        })
    }

    try {
      const decoded = jwt.verify(token, "seifewdaystogo") 
      
      req.user = decoded.user
      next()

    } catch (error) {
        return res.status(401).json({
            message: "Token is not valid!"
        })
    }
}