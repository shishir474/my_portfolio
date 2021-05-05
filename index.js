const express = require('express');
const port = 8000;
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();
const db = require('./config/mongoose');
const User = require('./models/user');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views')) 

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.get('/', function(req, res){
  return res.render('resume_proj');
})

app.post('/create', function(req, res){

  User.create(req.body, function(err, newUser){
    if(err){
      console.log(err);
      return;
    }
    return res.redirect('back');
  });
})

app.listen(port,function(err){
  if(err){
      console.log(err);
      return;
  }
  console.log('server is running fine on port', port);
});


// function requestHandler(req,res){
 
//     console.log(req.url);

// if(req.url.indexOf('.html') != -1){ 

//       fs.readFile(__dirname+'/resume_proj.html', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//       });

//     }

//     if(req.url.indexOf('.js') != -1){ 

//       fs.readFile(__dirname+'/resume.js', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data);
//         res.end();
//       });

//     }

//     if(req.url.indexOf('.css') != -1){ 

//       fs.readFile(__dirname+'/resume.css', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         res.write(data);
//         res.end();
//       });

//     }
   
// }
// const server = http.createServer(requestHandler);

