module.exports = (req, res, next)=> {
    if(req.session.user.category_id == 1){
        next()
    }else{
    
    res.redirect('/admin')
    }
    /*if(!req.session.user.admin){
        next()
    }else{
    
    res.redirect('/admin')
    }*/
    }
    
    