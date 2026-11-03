const notificationController = require('../controller/ticket.controller');
const ticketMiddlewares = require('../middlewares/ticket.middlwares');


const routes = (app) =>{
    app.post(
        '/notiservice/api/v1/notification',
        ticketMiddlewares.verifyTicketNotificationCreateRequest,
        notificationController.createTicket,
    );

    app.get(
        '/notiservice/api/v1/notification/:id',
        notificationController.getTicket
    );

    app.get(
        '/notiservice/api/v1/notification',
        notificationController.getAllTickets
    );
}