const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
},()=>{
    console.log('MongoDB is running...')
})