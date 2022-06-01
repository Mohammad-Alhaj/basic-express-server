# basic-express-server

## Notes 
 
 * whene we finshed we need to test the serever if we wont test
 the console.log we should use consoleSpy 

 * if we wont apply golople middleware we should put the middleware in the top 

* I used isNan method to know if the string have a number it's return boolen


 ```
app.use(logger);//middleware



app.get('/person',validator,(req,res)=>{
    let namePerson = req.query;
res.status(200).json(namePerson) 

});
 ```

## middleware
creating folder middleware and creat to file 404 and 505 to
handler the error

## Test 

I test 3 file validators and logger and server 

* server 
I did two tests handler page and handler error 404

* validator 
I did three tests that meat three cases for null and string and non-string

* logger
i did two tests for spy on console.log and to suer the next function it's work





 ## the URL

 [](https://mohammad-basic-express-server.herokuapp.com)

 []()

 []()