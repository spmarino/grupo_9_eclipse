module.exports = (req, res, next)=> {
    if(req.session.user.category_id == 2){
        next()
    }else{
    
    res.redirect('/ingreso/users')
    
    
    /*if(req.session.user.admin){
        next()
    }else{
    
    res.redirect('/ingreso/users')*/
    }
    }
    
    