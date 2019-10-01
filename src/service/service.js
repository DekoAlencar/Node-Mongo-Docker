import axios from 'axios';
import environment from '../environment/environment';
import filter from '../config/filter';

const service = {
    order: (req, res)=>{
        orderData(req,res);
    }
}

async function orderData(req, res){
    const result = await axios.get(environment.urlDito);
    let data = filter.orderArray(result.data.events);
    res.send(data);
}

export default service;