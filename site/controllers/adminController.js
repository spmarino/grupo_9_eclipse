const {products,setProducts} = require('../data/products');
const toThousand = (n) =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const adminController = {
    'productLoad' : function(req, res){
        res.render('Admin/productLoad')
    },
    'adminIndex' : function(req, res){
        res.render('Admin/adminIndex')
    },
    'productList' : function(req, res){
        res.render('Admin/productList',
        {
            products,
            toThousand,
        })
    },
    'productEdit' : function(req, res){
        const id = req.params.id
const product = products.find(product =>{
    return product.id === +id
})
        res.render('Admin/productEdit',{
            product
        })
    },
    'productDetailAdmin': function(req, res){
        const id = req.params.id
const product = products.find(product =>{
    return product.id === +id
})
const toThousand = (n) =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
        res.render('Admin/productDetailAdmin', {
            product,
            toThousand,
        });
    },
    'adminSearch' : function(req, res){
        const {search} = req.query

        const productsFilter = products.filter((product)=>{
return product.title.toLowerCase().includes(search.toLowerCase());
        });

        res.render('Admin/results', {
            products: productsFilter,
            search,
            toThousand,
        })
    },
    'adminFilter': function(req, res){
        res.render('Admin/adminFilter')
    },
    'productNew': function(req, res){
        const {title, description, tipo, promo, color, aroma, sabor, varietal, añada, barrica, tiempo, tipoCosecha, terroir, price, descuento, envio, imagen, finca} = req.body
    let lastId = 0;
    products.forEach((product)=> {
        if (product.id > lastId) {
            lastId = product.id
        }
    });
    const id = lastId + 1;
    const newProduct = {
        id,
        title,
        description,
        tipo,
        promo,
        color,
        aroma,
        sabor,
        varietal,
        añada: +añada,
        barrica,
        tiempo: +tiempo,
        tipoCosecha,
        terroir,
        price: +price,
        descuento: +descuento,
        envio: +envio,
        imagen: imagen || 'producto1.png',
        finca,

    }

    products.push(newProduct);
    setProducts(products);

    res.redirect('/admin/products')
},

'productUpdate': function (req, res){
    const {title, description, tipo, promo, color, aroma, sabor, varietal, añada, barrica, tiempo, tipoCosecha, terroir, price, descuento, envio, imagen, finca} = req.body;

    const {id} = req.params;
    
    const updatedProduct = {
        id: +id,
        title,
        description,
        tipo,
        promo,
        color,
        aroma,
        sabor,
        varietal,
        añada: +añada,
        barrica,
        tiempo: +tiempo,
        tipoCosecha,
        terroir,
        price: +price,
        descuento: +descuento,
        envio: +envio,
        imagen: imagen || 'producto1.png',
        finca,
    }
    products.forEach((product, index)=> {
        if(product.id === +id) {
            products.splice(index, 1, updatedProduct);
        }
    });
    setProducts(products);

    res.redirect(`/admin/products/${id}`)
},
'productDestroit': function (req, res){
    const {id} = req.params;
    const productsFilter = products.filter((product)=>{
        return product.id !== +id;
    });

    
    setProducts(productsFilter);

    res.redirect('/admin/products')
}
}


module.exports = adminController;