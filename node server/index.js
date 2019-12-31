const express = require("express")
const app = express()
const cors = require("cors")
const bodyp = require("body-parser")
const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient
const url = "mongodb://localhost:27017" 
// const url = " mongodb+srv://dbUsemongodb+srv://dbUser:dbUser@cluster0-tige8.mongodb.net/test?retryWrites=true&w=majorityr:dbUser@cluster0-tige8.mongodb.net/test?retryWrites=true&w=majority";
const port = 3000

const saltRounds = 10;
app.use(cors());
app.use(bodyp.json());
//authentication
function authentication(req, res, nxt) {
  // var incomingToken=req.header("Authorization");
  var incomingToken=req.body.token
console.log(incomingToken)
  jwt.verify(incomingToken,"code",function(err,decode){
    console.log(decode)
    if(decode !== undefined){
      nxt()
    }
    else{
      res.status(401).json({
        mssg:"not permitted"
      })
    }
  })
}



//getting data from form & post to data base
app.post('/data',function(req,res){

    mongoclient.connect(url, function(err, client) {
      if (err) throw err;

      // console.log(req.body)

      db=client.db("myprog")

      db.collection("authors").insertOne(req.body,(err,data)=>{
        if (err) throw err;

        // console.log(data)

        res.json({"mess":"inserted data in data base"})

      }
    )
        client.close()

    });
})




// login validation
app.post('/login',function(req,res){

    mongoclient.connect(url, function(err, client) {
      if (err) throw err;

      db=client.db("myflim")
      
      // console.log(req.body)
      var result=db.collection("authors").findOne({email:req.body.email})

      result.then(
        function (userdata){
          console.log(userdata)
          // console.log(req.body)

          if(userdata == null){
            res.json({
              mess:"mail id not found"
            })
          }

          else{
         
          

          if(req.body.password == userdata.password){
                res.json({
                  mess:"welcome"
                })
              }
              else{
                res.json({
                  mess:"invalid password"
                })
          }
        }

          client.close()
        })

      })

    })




app.use(cors());
//appdinding prog list to component
app.get('/proglist',function (req, res) {
  mongoclient.connect(url, function(err, client) {
        if (err) throw err;
    
        db=client.db("myprog")
        
        // console.log(req.body)
        var result=db.collection("authors").find().toArray()

        result.then((data)=>{
          res.json(data)
        })

        client.close()
  })

})




//message on empty url
app.get('/',function (req, res) {
  res.send("<h1>hellow switch to data</h1>")
})

//check token
app.get('/afterlogin', authentication , function (req, res) {
  res.json({
    "key":"val"
  })
})
app.post('/del',function(req,res){

  mongoclient.connect(url, function(err, client) {
    if (err) throw err;

    db=client.db("myflim")
    
    console.log(req.body)
    var result=db.collection("authors").deleteOne({Name:req.body})
  
  
  })
})
//port listering
app.listen(port, () => { console.log(`Example app listening on the port ${port}!`) })




