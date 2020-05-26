let express = require("express"),
    app = express();

let port = 8080;

app.use(express.static(__dirname+"/src"));
app.listen(port,()=>{
  console.log(`server running at port ${port}`)
});

app.get("/",(req,res)=>{
    res.sendFile("/index.html");
});
