const MongoClient = require('mongodb').MongoClient;

const conn = async () => {
    try{
        return (await MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true})).db("apibackend");
        console.log('Connected successfully to server');
        

    }catch (e){

        console.error(e.stack)
    }
} 

module.exports = { conn }