var express=require('express');
var infoRouter=express.Router();

infoRouter.get('/sonal',getHandler)

function getHandler (req,res,next){
    res.send('some data is there');
    res.end();
}

/**
 * @param  {any} req
 * @param  {any} res
 * @param  {any} next
 * @param  {any} {console.log(req.body.fname
 * @param  {any} ;res.send('gotsomereply'
 * @param  {any} ;res.end(
 */
infoRouter.post('/sonal',function(req,res,next){
    console.log(req.body.fname);
    res.send('got some reply');
    res.end()
});

module.exports=infoRouter;
