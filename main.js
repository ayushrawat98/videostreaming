const express = require('express')
const path = require('path')
const cors = require('cors')
const videorouter = require('./routes/video.route')
const authenticaterouter = require('./routes/authenticate.route')
const userrouter = require('./routes/user.route')
const commentrouter = require('./routes/comment.route')
const adminrouter = require('./routes/admin.route')
const syncer = require('./models/sync')
const ipgeoblock = require("node-ipgeoblock");
const getipaddress = require('./middlewares/getipaddress')
const createadmin  = require('./helper/createAdmin')
const helmet = require("helmet")
const https = require("https")
const fs = require("fs")
const compression = require("compression")
require('./helper/cronJob')

const app = express()


app.use(cors())

//before serving static , compress it
app.use(compression())

//serve index.html
app.use(express.static(path.join(__dirname, "public/angular")));

//parse json data
app.use(express.json())

//get ip address of user
app.use(getipaddress)

//DB
syncer()
// createadmin()

//routes
app.use("/server/video", videorouter)
app.use("/server/authenticate", authenticaterouter)
app.use("/server/user", userrouter)
app.use("/server/comment", commentrouter)
app.use("/server/admin", adminrouter)

//send angular index.html and use its routing
app.get('*', (req, res, next) =>{
    res.sendFile(path.join(__dirname, 'public', 'angular', 'index.html'))
})

//handle any error
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
})


// create server local
app.listen(process.env.PORT, (ex) => {
    console.log(process.env.PORT)
})