'use strict'
const error500 = (error,req,res,next)=>{
res.status(500).send({
    code:500,
    messag :`Server Error message as the response ${error}`
})
}
module.exports= error500;