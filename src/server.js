'use strict';
const express =require('express');

const logger = require('./middleware/logger')
const error404 = require('./error-handlers/404')
const error500 = require('./error-handlers/500')
const validator =require('./middleware/validator')
const app = express();

 app.use(logger);


app.get('/person',validator,(req,res)=>{
    let namePerson = req.query;
res.status(200).json(namePerson) 

});




app.use('*',error404);
app.use(error500)


function start(PORT){
    app.listen(PORT,()=>{
        console.log(`Lessening to PORT ${PORT}`);
    })
}

module.exports = {
    app: app,
    start: start,
}