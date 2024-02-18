const express = require('express');
const User = require('../models/User.js');
const genrateToken = require('../config/genrateToken.js');
const expressAsynHandler = require('express-async-handler')


const loginController = expressAsynHandler(async(req, res)=>{
    const {name, password} = req.body;
    const currUser = await User.findOne({name});

    console.log(currUser)
    console.log(await currUser.matchPassword(password));
    

    //check password
    if(currUser && (await currUser.matchPassword(password))){
        res.json({
            _id: currUser._id,
            name: currUser.name,
            email: currUser.email,
            isAdmin: currUser.isAdmin,
            token: genrateToken(currUser._id)
        })
    }else{
        throw new Error('Invalid username or password');
    }

});


const registerController = expressAsynHandler(async(req, res)=>{
    const {name, email, password} = req.body;
    //check input data
    if(!name || !email || !password){
        res.send(400)
        throw new Error('Input fields missing info')
    }

    //check for existing user
    const userExist = await User.findOne({email});
    if(userExist){
        throw new Error('User already exists');
    }

    //check if the username exist already
    const userNameExist = await User.findOne({name})
    if(userNameExist){
        throw new Error("Username already taken")
    }

    //create a new user
    const newUser = await User.create({name, email , password});
    if(newUser){
        res.status(201).json(
            {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: genrateToken (newUser._id)
            }
        )
    }else {
        res.status(400);
        throw new Error('Registration error');
    }
})

module.exports = {loginController, registerController}