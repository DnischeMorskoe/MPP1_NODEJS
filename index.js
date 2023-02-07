const express = require("express")
const hbs = require("hbs")
const fs = require("fs-extra")
const port = 4000

const patients_code = require("./routes/patients_code.js")
const date_helper = require("./routes/date_helper.js")

const app = express()


app.set('views', './views')
app.set("view engine", "hbs")

hbs.registerHelper("printDate", date_helper.formatDate);

hbs.registerPartials('./views/partials')

app.get("/", patients_code.main);

app.listen(port, () => console.log('server is running'))