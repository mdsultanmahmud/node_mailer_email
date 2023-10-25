const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000 

const SendMailByNodemailerRoutes = require("./routes/v1/sendMail.routes")


app.use(express.json())

app.get("/", (req, res) =>{
    res.send("app is running successfully!")
})

app.use("/api/v1/send_mail", SendMailByNodemailerRoutes)

app.listen(port, () =>{
    console.log(`app is running from port: ${port}`)
})