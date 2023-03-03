const mongoose = require('mongoose');

// const dbURI = 'mongodb://localhost/Loc8r';
// mongoose.connect(dbURI, { useNewUrlParser: true });


const dbURI = 'mongodb+srv://D-SHO_Consultant:siZsxfOvSm5rUaad@cluster0.177zb.mongodb.net/myFDbase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// const { MongoClient } = require('mongodb');



mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


require('./locations');

require('./users');