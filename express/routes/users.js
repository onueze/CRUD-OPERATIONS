import express from 'express';


import { getUserByID, createUser, patchUser, deleteUser, getUsers } from '../controller/users.js';


const router = express.Router();

// {
//     "firstName" : "Alex",
//     "lastName" : "Elemele",
//     "age" : "21",
//     "university" : "City, University of London"
// },
// {
//     "firstName" : "Philip",
//     "lastName" : "Crustler",
//     "age" : "19",
//     "university" : "Queen Mary, University of London"
// }


// all routes are starting with /users

router.get('/', getUsers); // read

router.post('/' , createUser); // create

router.get('/:id', getUserByID); // another type of read


router.delete('/:id', deleteUser); // delete

router.patch('/:id', patchUser); // update



export default router; // to make use of it in main index module