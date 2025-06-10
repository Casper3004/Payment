const express = require("express")
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser")
const routes = require("../backend/Routes/routes.js");
const accounts = require("../backend/Routes/accounts.js")
const cors = require("cors")


app.use(cors());

app.use(bodyParser.json());
app.use("/api/v1", routes);
app.use("/api/v1/account",accounts)
app.listen(PORT, ()=>{
    console.log("App is Listening on PORT" + PORT);
});


module.exports = {
    express
}
