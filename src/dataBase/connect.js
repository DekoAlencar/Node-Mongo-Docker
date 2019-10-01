import mongoose from 'mongoose';
import environment from '../environment/environment';

const uri = `mongodb://${environment.DBUSER}:${environment.DBPASSWORD}@${environment.DBHOST}:${environment.DBPORT}/${environment.DBNAME}`;//

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.set('autoCreate', true);

mongoose.connect(uri,options).then(result=>{
    console.log("conncetado com o bando de dados: "+ environment.DBNAME);
})
.catch(error=>{
    console.error(error);
})

export default mongoose;