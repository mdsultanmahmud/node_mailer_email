const nodemailer = require("nodemailer")

module.exports.SendMailByNodemailer = async (req, res) => {


    try {
        // if you have no real account you can use it 
        const testAccount = await nodemailer.createTestAccount()
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email", // Use Ethereal Email's SMTP server
            port: 587,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const info = await transporter.sendMail({
            from: '"Md. Sultan Mahmud" <sultan@email.com>', // sender address
            to: "mdsultanmahmud.bd00@gmail.com, sm8106418@gmail.com", // list of receivers
            subject: "Confirmation of Receipt!", // Subject line
            text: `Dear [Person's Name],

I hope this message finds you well. I wanted to confirm that I have received your email. Thank you for reaching out.

I will review the content and get back to you as soon as possible. If there are any specific details or urgent matters you would like to address, please feel free to let me know, and I'll make sure to prioritize them.

Thank you for your prompt communication, and I look forward to further correspondence.

Best regards,

Md. Sultan Mahmud`, // plain text body
            html: "<b>From Md. Sultan Mahmud</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        if (!info.messageId) {
            res.send({
                status: false,
                message: "Mail does nott send!",
            })
        }

        res.send({
            status: true,
            message: "Mail send succesfully!",
            data: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    } catch (error) {
        console.log(error)
    }
}