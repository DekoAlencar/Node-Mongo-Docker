import service from '../service/service';
import Evento from '../models/evento';

const controller = {
    post: async (req, res)=>{
        try {
            let evento = await Evento.create(req.body);
            res.send({evento});
        } catch (error) {
            res.send(error);
        }
    },
    get: (req, res)=>{
        if(req.params.nome.length<=1){
            throw("informe ao menos 2 letras");
        }
        const eventos = Evento.find({event: new RegExp('^'+req.params.nome)}, (error, result)=>{
            res.send(result);
        })
    },
    evnt: service.order
}

export default controller;