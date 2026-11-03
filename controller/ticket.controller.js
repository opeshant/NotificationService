const notificationService = require('../services/notification.service');
const {errorResponseBody , successResponseBody} = require('../utils/responsebody');
const {STATUS_CODES : STATUS} = require('../utils/constants');


const createTicket = async(req , res)=>{
    try{
        const response = await notificationService.createTicket(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "successfully created a notification ticket";
        return res.status(STATUS.OK).json(successResponseBody);
    }
    catch(error){
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
        
    }
}


module.exports = {
    createTicket
}