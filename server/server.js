const express = require('express')
const mongoose = require('mongoose')

const app = require('./app')

/* Loading the environment variables from the .env file. */
require('dotenv').config()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todoapiDB'

// /* Connecting to the database and then starting the server. */
// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true })
//   .then(() => {
//     app.listen(PORT, console.log('Server stated on port 5000'))
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

connectDB()

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
