module.exports= function(req, res, next){

    //401- Unforbidden-which means the user has not supplied the correct JSON Web token
    //403-Forbidden- which means that the JSOn web token supplied is correct but still the user does 
    //has permission to access the resource
    if(!req.user.isAdmin) res.status(403).send("Access denied!!");
    next();
}