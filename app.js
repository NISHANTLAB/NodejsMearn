var {check,validationResult} = require('express-validator');
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mysql = require('mysql2');
const app = express()
const bodyParser = require('body-parser');
const port =5000;




const  connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database:"re"
      });
     
      connection.connect((err)=> {
          if (err) throw err;
        //   console.log(err);
          console.log("Connected!");
      });
app.use(express.static('public'));
app.use('/css',express.static(__dirname ='public\css'))
// // app.use('/views',express.static(__dirname ='views'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(express.json())

app.use(expressLayout)
app.set('layout','./layouts/layout')
app.set('view engine','ejs')



app.get( "",(req,res)=>{
    res.render('index',{title : "Home Page"})
})

app.get( "/about",(req,res)=>{
    res.render('about',{title : "About Page",layout : './layouts/layout1'})
})
app.get( "/contact_Us",(req,res)=>{
    res.render('ContactUs',{title : "Contact Us Page",layout : './layouts/layout3'})
})
app.get( "/login",(req,res)=>{
    res.render('demo2',{title : "Login Page",layout : './layouts/layout4'})
})
app.get( "/signup",(req,res)=>{
    res.render('demo',{title : "SignUp Page",layout : './layouts/layout4'})
})
app.get( "/login_submit",(req,res)=>{
    res.render('forget_password',{title : "hello!!",layout : './layouts/layout2'})
})
app.get( "/signUp_submit",(req,res)=>{
    res.render('success',{title : "hello!!",layout : './layouts/layout2'})
    
})
// app.get( "/s",(req,res)=>{
//     res.render('demo',{title : "hello!!",layout : './layouts/layout4'})
// })
app.post('/signUp_submit', (req, res) =>{

        console.log(req.body);
        const name = req.body.username;
        const email =  req.body.email;
        const password =  req.body.password;
        const cpassword = req.body.password2;

      var sql = "INSERT INTO user_details (user_name,email,password,password2) VALUES ('"+name+"','"+email+"','"+password+"','"+cpassword+"')";
      connection.query(sql,(err, result)=> 
        {
            if (err) throw err;
             console.log("1 record inserted");
            });
            res.redirect('/');
    //   res.send("hello")
    });
 
// app.post(
//     "/signUp_submit",
//     check("username")
//         .isLength(5)
//         .withMessage("enter name")
//         .isAlpha()
//         .withMessage("name should only have alpabets"),
//     check("email").isEmail().withMessage("enter vaild email"),
//     check("password").isStrongPassword().withMessage("please enter strong password"),
//     check("password2").isStrongPassword().withMessage("please enter strong password"),
//     (req, res) => {
//         var username = req.body.uname;
//         var email = req.body.Email;
//         var password = req.body.password;
//         var cpassword = req.body.confirm_password;
//         console.log(req.body);
//         console.log(username);
//         console.log(email);
//         console.log(password);
//         console.log(cpassword);
//         // var sql = "INSERT INTO user_details (user_name,email,password,password2) VALUES ('"+username+"','"+email+"','"+password+"','"+cpassword+"')";
//         //       connection.query(sql, function (err, result) 
//         //         {
//         //             if (err) throw err;
//         //              console.log("1 record inserted");
//         //       });
//         var err = validationResult(req);
//         if (!err.isEmpty()) {
//             console.log(err.array());
           
//         } else {
//             res.redirect("/signup");
//         }
//            res.render("success", {
//             title: "SignUp Page",
//             layout: "./layouts/layout3",
//             // data: err.array(),
            
//         });
       
     
//     }
// );
app.listen(port,() =>console.info(`App Listening on port ${port}`))