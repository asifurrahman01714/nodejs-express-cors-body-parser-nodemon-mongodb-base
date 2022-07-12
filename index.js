// Creating a express function
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;
require('dotenv').config();
console.log(process.env.DB_PASS,process.env.DB_USER)


app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for file


app.get("/", (req,res)=>{
    console.log("Requesting anyone");
    res.send("Hi! I have got response")
})


app.listen(port, ()=>{
    console.log("Server is running on port 5000");
})








// firebase admin set up for verify idToken
/*
const admin = require("firebase-admin");
const serviceAccount = require("./burj-al-arab-bafe3-firebase-adminsdk-q5wtu-5b0a97a05d.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
*/

// MongoDB connection
/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoDbUserPassword = process.env.DB_PASS;
const mongoDbUser = process.env.DB_USER;
const uri = `mongodb+srv://${mongoDbUser}:${mongoDbUserPassword}@atlascluster.eb7mhhm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("burjAlArabHotel").collection("bookings");
  console.log('database connected');
  // Post data
  app.post("/addBooking", (req, res)=>{
    const booking = req.body;
    collection.insertOne(booking);
    console.log(booking);
    res.send(booking);
  });

  // Get Data
  app.get("/bookings",(req, res)=>{
    console.log(req.query.email);
    console.log(req.headers.authorization);
    const bearer = req.headers.authorization;
    if (bearer && bearer.startsWith('Bearer ')) {
        const idToken = bearer.split(' ')[1];
        console.log({idToken});
        // idToken comes from the client app
        admin.auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
        const uid = decodedToken.uid;
        const decodedEmail = decodedToken.email;
        const queryEmail = req.query.email;
        console.log({uid});
        if (decodedEmail == queryEmail) {
            collection.find({email : queryEmail})
            .toArray((err, documents)=>{
                res.send(documents)
            })
        }else{
            res.status(401).send("Un- authorized User")
        }
        
        })
        .catch((error) => {
        // Handle error
        });
    }else{
        res.status(401).send("Un- authorized User")
    }
    
  })

});

*/

/*
app.get('/', function (req, res) {
    const fruit = {
        product:'Banana',
        price:10
    }
    res.send(fruit)
})

app.get('/fruits/banana', (req, res)=>{
    res.send({product:'banana', quantity:100, price:1000})
})

const users = [
    {name:"Asif", roll:10},
    {name:"Arif", roll:11},
    {name:"ahmad", roll:12},
    {name:"sakib", roll:13}
]
app.get('/users/:id',(req,res)=>{
    const rollNumber = req.params.id;
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        const elementRoll = element.roll;
        if (elementRoll == rollNumber) {
            console.log(element);
            res.send(element);
        }
    }
})
app.get("/users",(req, res)=>{
    res.send(users);
})

// Post method
app.post("/addUser", (req, res)=>{
    const user = req.body;
    console.log(user);
    user.id = 55
    console.log(user)
    res.send(user);
})


//Show page with a form 
app.use(express.urlencoded());
app.get('/sendFormToServer', (req, res, next) => {
    res.send(`
    <form method="POST" action="/sendFormToServer">
        <input type="text" name="username" placeholder="username"></br></br>
        <input type="submit">
    </form>`
  );
});

app.post('/sendFormToServer', function (req, res, next) {
    console.log(req.body)
    res.send(JSON.stringify(req.body));
});

*/