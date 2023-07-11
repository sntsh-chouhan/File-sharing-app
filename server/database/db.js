import mongoose from 'mongoose';


const DBConnection = async ()=>{

    const DB_URL = `mongodb://santosh02:santosh02@ac-tpwnchx-shard-00-00.xnwwemq.mongodb.net:27017,ac-tpwnchx-shard-00-01.xnwwemq.mongodb.net:27017,ac-tpwnchx-shard-00-02.xnwwemq.mongodb.net:27017/?ssl=true&replicaSet=atlas-13udkp-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log('database connected successfully');
    }catch(error){
        console.error('Error while connection with the database =>', error.message);
    }
}

export default DBConnection;