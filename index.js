const express = require("express")
const path = require("path")
const dbConnector = require("./database/webdevConnector")
// const publicpath =  path.join(__dirname,"public");


const app = express();

// app.use(express.static(publicpath))

app.use(express.json());
app.use(express.urlencoded())

app.set('view engine', 'ejs')

app.get("/form", (req, resp) => {
    resp.render("register")
})

app.post("/formPost", async (req, resp) => {
    let result = await dbConnector();
    let response = await result.find({ email: req.body.email })

    if (response.length == 0) {
        let data = new result({
            firstname: req.body.fname,
            lastname: req.body.lname,
            age: Number.parseInt(req.body.age),
            gender: req.body.gender,
            phone: req.body.phone,
            email: req.body.email,
            course: req.body.course
        })
        result = await data.save();
        
        resp.send(result)
    }
    else{
      
        resp.render("warning")
    }
    
})
app.listen(4500)