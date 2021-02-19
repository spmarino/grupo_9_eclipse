

const adminController = {
    'productLoad' : function(req, res){
        res.render('Admin/productLoad')
    },
    'adminIndex' : function(req, res){
        res.render('Admin/adminIndex')
    },
    'productList' : function(req, res){
        res.render('Admin/productList')
    },
    'productEdit' : function(req, res){
        res.render('Admin/productEdit')
    },
    'productDetailAdmin': function(req, res){
        res.render('Admin/productDetailAdmin')
    }
};


module.exports = adminController;