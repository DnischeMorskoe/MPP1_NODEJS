const express = require("express")
const hbs = require("hbs")
const fs = require("fs-extra")
const multer  = require("multer");

const port = 4000

const patients_code = require("./routes/patients_code.js")
const date_helper = require("./routes/date_helper.js")
const files = require("./routes/files.js")


const app = express()

const upload=multer({dest:"./files"});
const urlencodedParser = express.urlencoded({extended: false});

app.post('/upload', upload.single('File'), files.upload);
app.post('/deleteFile', urlencodedParser, files.deleteFile);
app.post('/downloadFile', urlencodedParser, files.downloadFile);

app.set('views', './views')
app.set("view engine", "hbs")


hbs.registerHelper("printDate", date_helper.formatDate);



app.post("/new",  urlencodedParser, patients_code.new);
app.post("/add", urlencodedParser, patients_code.add);
 app.post("/filter", urlencodedParser, patients_code.filter);


app.get("/delete", patients_code.delete);
app.get("/edit", patients_code.edit);
app.get("/details", patients_code.details);
app.get("/", patients_code.main);




app.listen(port, () => console.log('server is running'))