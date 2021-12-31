const dotenv = require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')


//const File = require('./models/fileSchema')

dotenv.config({path:'./config.env'})
const port = 5001;
require('./db/dbconnection')


const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
})) 





//set the public folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middle ware
app.use(bodyParser.urlencoded({extended:true}));
//middleware
const middleware = (req,res,next)=>{
    console.log("hello middleware");
    next();
}


app.use(require('./router/auth')) ;




app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`);
});
