const user = require ('../data/user')

let loginController={
    'login' : function (req,res){
        res.render ('login')
    }

}
module.exports = loginController;