const express = require('express');
const router = expres.Router()
const app = express()

/*
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
*/

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/track-data', (req, res) => {
  console.log('welcome to track data', req.body.data)
  res.status(200).json({
    msg: 'Success'
  })
})

module.exports = {
  path: '/server/api',
  handler: router
}
