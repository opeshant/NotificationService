const Ticket = require('../models/ticket.notification');
const {STATUS_CODES : STATUS} = require('../utils/constants');

const create = async(data) =>{
    try{
        const ticket = await Ticket.create(data);
        return ticket;
    }
    catch(error){
        if(error.name == "ValitionError"){
            let err ={};
            Object.keys(error.errors).forEach(key=>{
                err[key] = error.erros[key].message;
            });
            throw{
                err ,
                code : STATUS.UNPROCESSABEL_ENTITY
            }
        }
        throw error;
    }
}