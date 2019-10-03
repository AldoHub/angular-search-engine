const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist"));
app.listen(process.env.PORT || 8080);

app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});
console.log("Server running");

//change the to "outputPath": "dist/", so it can read the files