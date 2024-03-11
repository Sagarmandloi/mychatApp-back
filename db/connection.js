const mongoose = require('mongoose');

//const URL =process.env.MONBODB_URL

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))

//mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zw6hky5.mongodb.net/?retryWrites=true&w=majority