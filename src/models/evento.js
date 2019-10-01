import mongoose from "../dataBase/connect";

const UserSchema = mongoose.Schema({
    event:{
        type: String
    },
    timestamp: {
        type: Date
    },
    custom_data:[]
})

const evento = mongoose.model('evento', UserSchema);

export default evento;