const express = require("express");
const app = express();
const port = 3000;
const bmi = require("./routes/bmi");

app.set('view engine', 'pug');
app.use(express.static('public'))
app.use("/", bmi);
app.use(express.urlencoded({extended: true}));




app.listen(port, () => { console.log(`Server is running on port: ${port}`)});


