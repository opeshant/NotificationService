const {errorResponseBody , successResponseBody} = require('../utils/responsebody');
const {STATUS_CODES : STATUS} = require('../utils/constants');


const verifyTicketNotificationCreateRequest = async(req , res , next) =>{
    if(!req.body.subject){
        errorResponseBody.err = "no subject given for the email";
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }

    if(!req.body.content){
        errorResponseBody.err = "no content given for the email";
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }

    if(!req.body.recepientEmails || !(req.body.recepientEmails instanceof Array || 
        req.body.recepientEmails.length <= 0
    )){
        errorResponseBody.err = "no recepient email is given";
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }
    next();
}

module.exports ={
    verifyTicketNotificationCreateRequest
}