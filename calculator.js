const express = require("express") ;
const bodyParser = require("body-parser") ;
var app = express() ;
app.use(bodyParser.urlencoded({extended: true})) ;

app.listen(2500 , function(){
    console.log("Server hosted at port 2500") ;
})

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html") ;
})

app.post("/" , function(req,res){
    
    var num1 = parseFloat(req.body.height );
    var num2 = parseFloat(req.body.weight);

    var heightSquare = num1 * num1 ;

    var bmi = num2 / heightSquare ;

    res.send("Your BMI is: " + bmi ) ;
})

