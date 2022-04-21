const express = require('express');
const path = require('path');



const app = express();


// init middleware
// const logger = require('./Logger');
// app.use(logger);s

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));



// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

// Members API routes
app.use('/api/members',require('./routes/api/members'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("Server running on port:",PORT));