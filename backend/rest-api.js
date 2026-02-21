var express=require("express");
var mongoClient=require("mongodb").MongoClient;
var cors= require("cors");


var conStr="mongodb://127.0.0.1:27017";

var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.get('/get-users',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database=clientObj.db('calendardb');
        database.collection("users").find({}).toArray().then(response=>{
            res.send(response);
            res.end();
        });
    });
});



app.get('/get-appointments/:UserId',(req,res)=>{
    var id=req.params.UserId;
    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database=clientObj.db('calendardb');
        database.collection('appointments').find({UserId:id}).toArray().then(response=>{
            res.send(response);
            res.end();
        });
    });
   
});


app.post('/register-user',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database=clientObj.db('calendardb');
        var data={
            UserId:req.body.UserId,
            UserName:req.body.UserName,
            Password:req.body.Password,
            Email:req.body.Email,
            Mobile:req.body.Mobile
        };
        database.collection('users').insertOne(data).then(()=>{
            console.log("user registered successfully...");
            res.end();
        });
    });
});

app.post('/add-task',(req,res)=>{
    mongoClient.connect(conStr).then(clientObj=>{
        var database=clientObj.db('calendardb');

        var appointment={
            Appointment_Id:parseInt(req.body.Appointment_Id),
            Title:req.body.Title,
            Description:req.body.Description,
            Date:new Date(req.body.Date),
            UserId:req.body.UserId
        };
        database.collection("appointments").insertOne(appointment).then(()=>{
            console.log("new task added successfully ...");
            res.send();
        });
    });
});


app.put("/edit-task/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(conStr).then(clientObj=>{
        var database=clientObj.db("calendardb");

        var appointment={
            Appointment_Id:parseInt(id),
            Title:req.body.Title,
            Description:req.body.Description,
            Date:new Date(req.body.Date),
            UserId:req.body.UserId
        };
        database.collection("appointments").updateOne({Appointment_Id:id},{$set:appointment})
        .then(()=>{
            console.log("Task updated");
            res.send();
        });
    });
});

app.delete("/remove-task/:id",(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database=clientObj.db("calendardb");
        database.collection("appointments").deleteOne({Appointment_Id:parseInt(req.params.id)})
        .then(()=>{
            console.log("Task Deleted..");
            res.end();
        });
    });
});

app.get('/appointments/:UserId',(req,res)=>{
    var id=parseInt(req.params.UserId);
    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database=clientObj.db('calendardb');
        database.collection('appointments').find({Appointment_Id:id}).toArray().then(response=>{
            res.send(response);
            res.end();
        });
    });
   
});

app.listen(3300);
console.log("server connected : http://127.0.0.1:3300");