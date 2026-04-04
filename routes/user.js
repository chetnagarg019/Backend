const express = require('express')
const router = express.Router()




// define the home page route
router.get('/', (req, res) => {
  res.send('user home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('user blog')
})

router.get('/userPost/:slug', (req, res) => {
  res.send(`fetch user posts ${req.params.slug}`)
})



module.exports = router
