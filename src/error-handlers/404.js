'use strict'
const error404= (req,res)=>{
    res.status(404).send(
       { 
           
        code:"404",
        message:"Not-Found message as the response"
    }
    )
}

module.exports=error404;