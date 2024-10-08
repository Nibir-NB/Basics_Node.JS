const authorize = (req, res, next)=>{
    const {user} = req.query;

    if(user === 'Nibir'){
        req.user = { name:'john',id:2 }
        next();
    }
    else{
        res.status(401).send('Unaothorized')
    }
}


module.exports = authorize;