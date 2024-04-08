const express = require('express')
const router = express.Router()
const schemas = require('../models/Account')
const { Schema } = require('mongoose')

router.post('/signup', async(req,res) =>{
    const {name, email, password} = req.body

    const accountData = {name:name, email:email, password:password}
    const newAccount = new schemas.Account(accountData)
    const saveAccount = await newAccount.save()

    if(saveAccount){
        console.log("Account made!")
    }

})