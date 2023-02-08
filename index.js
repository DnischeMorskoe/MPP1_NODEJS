const express = require("express")
const hbs = require("hbs")
const fs = require("fs-extra")

const port = 4000

const patients_code = require("./routes/patients_code.js")
const date_helper = require("./routes/date_helper.js")

const app = express()


const urlencodedParser = express.urlencoded({extended: false});



app.set('views', './views')
app.set("view engine", "hbs")


hbs.registerHelper("printDate", date_helper.formatDate);



app.post("/new",  urlencodedParser, patients_code.new);
app.post("/add", urlencodedParser, patients_code.add);


app.get("/details", patients_code.details);
app.get("/", patients_code.main);




app.listen(port, () => console.log('server is running'))