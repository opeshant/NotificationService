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

const getAll = async()=>{
    try{
        const response = await Ticket.find();
        return response;
    }
    catch(error){
        throw error;
    }
}

const getById = async(id)=>{
    try{
        const response = await Ticket.findById(id);
        if(!response){
            throw{
                err : "No ticket response found",
                code : STATUS.NOT_FOUND
            }
        }
    }
    catch(error){
        throw error;
    }
}

module.exports= {
    create,
    getAll,
    getById
}