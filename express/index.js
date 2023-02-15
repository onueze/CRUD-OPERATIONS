import express from 'express'; // import of express framework
import bodyParser from 'body-parser'; // to take in incoming post request bodies
import usersRoutes from './routes/users.js';

// import { MongoClient } from 'mongodb'; // used to connect to mongo database

// const { MongoClient } = require('mongodb');

// async function main(){
//     const uri = "mongodb+srv://onueze:Alexel01@restapicrud.de6ole0.mongodb.net/?retryWrites=true&w=majority";

//     const client = new MongoClient(uri);

//     try{
//     await client.connect();

//     await listDatabases(client);
//     } catch (e){
//         console.error(e);

//     } finally {
//         await client.close();
//     }

//     main().catch(console.error);

// }

// async function listDatabases(client){
//     const databasesList = client.db().admin().listDatabases();

//     console.log("Databases: ");
//     databasesList.databases.forEach(db => {
//         console.log(`-${db.name}`);
        
//     });
// }


const app = express(); // application lies in variable
const PORT = 3000; // front end are mostly 3000 but 5000 could be is used for backend

app.use(bodyParser.json()); // json is used 

app.use('/users', usersRoutes); // uses the import get request for the user

app.get('/', (req, res) => {   // makes get request to route '/'(home)
    res.send('hello from home page');
});



app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));


// difficulties:
// I didnt know that macOS Airplay Receiver was running on port 5000. So i had to research and use port 3000 instead