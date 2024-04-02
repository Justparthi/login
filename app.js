import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs"
import __dirname from "path"
import pg from "pg"

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "parthi",
    port: 5432
})

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

db.connect();




    db.query("SELECT * FROM user_info", (err, res) =>{
        if(err) {
            console.error("error executing query", err.stack)
        } else {
            console.log("ntg")
        }

        db.end
    }) 

    // res.render('log.ejs')


// app.get("/signup", (req,res) =>{
//     res.redirect('sign.ejs')
// })



app.listen(port, () =>{
    console.log(`Server is running in ${port}`)
})