const fs = require('fs');

const products = {
    products:JSON.parse(fs.readFileSync(`${__dirname}/baseDeDatos.json`, 'utf-8')),

    setProducts :(data) => {
        fs.writeFileSync(`${__dirname}/baseDeDatos.json`,JSON.stringify(data,null,2),'utf-8');
    }
}

module.exports = products;