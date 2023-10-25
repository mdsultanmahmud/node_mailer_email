const express = require("express")
const { SendMailByNodemailer } = require("../../controllers/sendMail.controller")
const router = express.Router()

router.route("/")
.get(SendMailByNodemailer)

module.exports = router 