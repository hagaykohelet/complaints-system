export function checkToken(req,res, next){
    const token = req.headers.token;
    if(!token){
        return res.status(401).send("unauthrized!")
    }
    next()
}