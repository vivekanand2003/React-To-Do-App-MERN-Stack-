var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send("<h2>Api</h2>");
    res.end();
});

app.get('/product',(req,res)=>{
    res.send(["All", "Electronnics", "Jewelary"]);
    res.end();
});

app.get("/details/:id/:name/:price/:brand",(req,res)=>{
    var product={
        Id: req.params.id,
        Name:req.params.name,
        price: req.params.price,
        Brand:req.params.brand 
    };
    res.send(product);
    res.end();
});

app.use((req,res)=>{
    res.send("<code>Page is not availible 404 </code>");
});

app.listen(2000);
console.log('server Started : http://127.0.0.1:2000');