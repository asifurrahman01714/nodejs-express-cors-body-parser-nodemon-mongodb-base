// Creating a express function
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId;


app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for file

app.get("/", (req,res)=>{
    console.log("Requesting anyone");
    res.send("Hi! I have got response")
})


app.listen(3000, ()=> console.log("Yay! Listening to port 3000"))




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