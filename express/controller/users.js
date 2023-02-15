
import { v4 as uuidv4 } from 'uuid';

let users = [
    
]

// CRUD = create, read , update , delete

export const getUserByID = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id); // tries to find matching user ID in user object and returns the whole user object
    res.send(foundUser);
};

export const createUser = (req,res) => {
    console.log('POST ROUTE REACHED');

    const user = req.body; // is the user that gets taken in from post request

    const userID = uuidv4(); // creates a unique ID (will never be the same due to timestamps, MD5 encryption etc.)

    const userWithID = {...user, id: userID}; // spread operator

    users.push(userWithID); // pushes user from post request input into the users list

    res.send(`User with name ${user.firstName} goes to ${user.university} and has been stored`);
};

export const getUsers = (req,res) => {
    console.log(users);
    res.send(users);
};

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} has been deleted`);
};

export const patchUser = (req,res) => {
    const { id } = req.params;

    const { firstName, lastName, age , university} = req.body;

    const userToUpdate = users.find((user) => user.id === id); // user that needs to be updated is searched in users array

    // the following lines match the respective key and changes the value of that key with users request
    if(firstName) userToUpdate.firstName = firstName;

    if(lastName) userToUpdate.lastName = lastName;

    if(age) userToUpdate.age = age;

    if(university) userToUpdate.university = university;

    res.send(`The User with the ID ${ id } has been updated`);

    
};