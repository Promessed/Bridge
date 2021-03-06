const express = require('express')
const path = require('path')
require('../db/mongoose')
require('dotenv').config


const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
app.use(express.json())

const userRouter = require('../routes/users')
app.use('/users', userRouter)

const jobRouter = require('../routes/jobs')
app.use('/jobs', jobRouter)

const employerRouter = require('../routes/employers')
app.use('/employers', employerRouter)

const adminRouter = require('../routes/admins')
app.use('/admins', adminRouter)

// const stackRouter = require('../routes/stacks')
// app.use('/stacks', stackRouter)

module.exports = app