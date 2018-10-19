const BgRoute = "\x1b[45m\x1b[1m%s\x1b[0m";
const FgYellow = "\x1b[33m\x1b[1m";
const BgBlue = "\x1b[44m\x1b[1m\x1b[37m";
const star =()=>console.log(FgYellow,'*'.repeat(50));
const line =(obj)=>console.log(BgBlue,'-'.repeat(50),{obj});
const loc = (str) => {console.log(BgRoute,"hit "+ str); star();}
const { Product } = require('./models')

//  REMEMBER TO TURN ON {context: 'query'} FOR UPDATES USING NPM UNIQUE VALIDATOR


module.exports = {
    index: (req,res)        => Product.find({})
            .then(  result  => loc('create success')       || res.json( result ))
            .catch( error   => loc('create erroror',error) || res.json( error  ))
    ,
    newProduct: (req,res)       => Product.create(req.body)
            .then(  result  => loc('create success')   || res.json( result ))
            .catch( error   => loc('create erroror',error) || res.json( error  ))
    ,
    removeProduct: (req,res)    => Product.findByIdAndRemove(req.params.productid)
            .then(  result  => loc('remove success')        || res.json( result ))
            .catch( error   => loc('remove erroror', error) || res.json( error  ))
    ,
    showProduct: (req,res)      => Product.findById(req.params.productid)
            .then(  result  => loc('show success')        || res.json( result ))
            .catch( error   => loc('show erroror', error) || res.json( error ))
    ,  
    updateProduct: (req,res)    => Product.findByIdAndUpdate(req.params.productid, req.body, { new:true, runValidators:true, context: 'query' } )
            .then(  result  => loc('update success')         || res.json( result ))
            .catch( error   => loc('update erroror', error)  || res.json( error ))
    ,



    // newRating: (req,res)    => Product.findByIdAndUpdate(req.params.productid, { $push: { ratings: req.body } }, { new:true, runValidators:true } )
    //         .then(  result  => loc('update success')         || res.json( result ))
    //         .catch( error   => loc('update erroror', error)  || res.json( error ))
}

