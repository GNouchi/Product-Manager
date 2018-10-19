const api = require('./api');
const bp = require('body-parser');

module.exports = (app)=>{
    app.use(bp.json()); 
 
    app.get('/api/products', api.index)
    app.get('/api/products/:productid', api.showProduct)
    app.post('/api/products', api.newProduct)
    app.delete('/api/products/:productid', api.removeProduct)
    app.put('/api/products/:productid', api.updateProduct)
    
    // app.put('/api/products/ratings/:productid', api.newRating)


    return app;
}