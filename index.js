const require = require('express');
const app = express();
const cookieParser = require('cookieParser');
const multer = require('multer');
const upload = multer({dest: 'upload/'});
const mysql = require ('mysql2');

const connection = mysql.createConnection({
    user: 'root',
    database: 'test' 
}).promise();

app.set('view engine', 'ejs');
app.use(cookieParser());

app.get('/login', (req,res)=>{
    res.render('login');
});

app.post(
    '/login',
    express.urlencoded({extended: true}),
    (req,res)=>{
        let u = req.body.uname;
        let p = req.body.upass;
        res.send("uname" + u + ", upasss =" + p);
    }
);

app.listen(8000);