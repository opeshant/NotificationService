const notificationController = require('../controller/ticket.controller');
const ticketMiddlewares = require('../middlewares/ticket.middlwares');


const routes = (app) =>{
    app.post(
        '/notiservice/api/v1/notification',
        ticketMiddlewares.verifyTicketNotificationCreateRequest,
        notificationController.createTicket,
    )
}