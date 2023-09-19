const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/myDB');
        console.log('connect to db successfully')
    } catch(error){
        console.log('failure')
    }
}

module.exports = { connect }