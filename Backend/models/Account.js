const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema

const accountSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
})

const Account = mongoose.model('Accounts',accountSchema,'users');

const mySchemas = {'Accounts':Account}
modules.exports = mySchemas