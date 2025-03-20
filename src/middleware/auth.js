
const userAuth =async(req,res,next)=>{
    const token = "9q99";
    const isAuthorizedAdmin = token === "999";
    console.log('user auth')
    if (!isAuthorizedAdmin) {
        res.status(401).send("Unauthorized Admin")
    } else {
        next();
    }
}

module.exports = {
    userAuth,
  };