const nodemailer = require('nodemailer');


const sendMail = (userId , password) =>{
    const transport = nodemailer.createTransport({
    service : "Gmail",
    auth : {
        user : userId,
        pass : password
    }
});

    transport.sendMail(
        {
            from : "mba@gmail.com",
            to : 'movieardr@gmail.com',
            subject : 'test mail for nodemailer',
            text : 'hey this is a test email'
        }
    )
}


module.exports=sendMail;