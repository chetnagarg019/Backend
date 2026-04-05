// // const express = require('express')
// import express from "express"
// const router = express.Router()




// // define the home page route
// router.get('/', (req, res) => {
//   res.send('blog home page')
// })
// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About blog')
// })

// router.get('/blogPost/:slug', (req, res) => {
//   res.send(`fetch blog posts ${req.params.slug}`)
// })



// // module.exports = router
// export default router;


import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Blog Home");
});

router.get("/about", (req, res) => {
  res.send("Blog About");
});

export default router;
//this is a blog

