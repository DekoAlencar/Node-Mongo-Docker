function filterArray(array){
    let lojas =  quickShortDate(array.filter(item=>{return item.event === "comprou"}));
    let compras = array.filter(item=>{return item.event === "comprou-produto"});
    var retorno = [];

    lojas.forEach(item=>{
        item.products = compras.filter(element=>{
            return element.custom_data["transaction_id"] === item.custom_data["transaction_id"] 
        })
        retorno.push(item);
    })
    return retorno.reverse();
}

function quickShortDate(array){
    return array.sort((a, b)=>{
        if(a.timestamp > b.timestamp){
            return 1;
        }
        if(a.timestamp < b.timestamp){
            return -1;
        }
        return 0;
    });
}

const filter ={
    orderArray: (array)=>{ return filterArray(array)}
}

export default filter;