const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const ActivityRouter = require('./routes/activity.route')
const AuthRouter = require('./routes/auth.route')

const app = express()

app.use(bodyParser.urlencoded())

/* Telling the application to use the express.json() middleware. This middleware will parse the body of
any request that has a Content-Type of application/json. */
app.use(express.json())

/* Allowing the frontend to access the backend. */
app.use(cors())

/* Telling the application to use the AuthRouter for any requests that start with "/api/auth". */
// app.use('/api/auth', AuthRouter)
app.use('/auth', AuthRouter)

// This piece works
// app.post('/auth/login', (req, res) => {
//   console.log(req)

//   const { email, password } = req.body

//   const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
//     expiresIn: '2h',
//   })
//   res.status(200).json({
//     statusCode: 200,
//     msg: 'Login successful',
//     token,
//   })
// })

/* Telling the application to use the ActivityRouter for any requests that start with "/api". */
app.use('/api', ActivityRouter)

/* This is a route handler. It is listening for a GET request to the root route of the application.
When it receives a request, it will send back a response with the string "Hello World!". */
app.get('/', (req, res) => {
  console.log(req)

  res.send('Hello World!')
})

module.exports = app
