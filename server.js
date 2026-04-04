// import express from "express";
// import blog from "./routes/blog.js";
// import user from "./routes/user.js";

// // const express = require("express"); // ye line cross
// const app = express();
// const port = 3000;

// // const blog = require('./routes/blog')
// // const user = require('./routes/user')





// app.use(express.static('public'))
// app.use('/blog', blog)
// app.use('/user',user)

// //app.get app.post or app.put or app.delete(path,handler)
// // app.get("/", (req, res) => {
// //   console.log("hey this is get");
// //   res.send("Hello this is get requuest !");
// // });

// // app.post("/", (req, res) => { // is stateme
// //   console.log("hey this is post");
// //   res.send("Hello this is post requuest !");
// // });

// // app.put("/", (req, res) => {
// //   console.log("hey this is put");
// //   res.send("Hello this is put requuest !");
// // });
 
// // app.delete("/", (req, res) => {
// //   console.log("hey this is delete");
// //   res.send("Hello this is delete requuest !");
// // });

// // app.get("/index", (req, res) => {
// //   console.log("hey its is a index");
// //   res.sendFile('templates/main.html', {root:__dirname});
// // });



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// }); // that is problem 

import express from "express";
import blog from "./routes/blog.js";

const app = express();
const port = 3000;

app.use("/blog", blog);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

