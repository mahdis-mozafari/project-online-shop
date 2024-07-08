const express = require('express')
const db =require('./db/connection.js') ;

const userRouter =require("./routes/user.routes.js") ;

const app = express();
const port = 5000;

app.use(express.json());
app.use("/api/v1/users", userRouter);


(async () => {
     db.connect()
    console.log("connected to database 🎉");
  
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  })();


