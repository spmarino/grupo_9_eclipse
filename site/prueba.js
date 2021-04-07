.then(user => {
    {
       req.session.user = {
           id: user.id,
           name: user.name,
           email: user.email,
           admin: user.admin,
           avatar: user.avatar,
           category_id: user.category_id,
           sex_id: user.sex_id,
       }
      

       return res.redirect('/ingreso/users')
   }});