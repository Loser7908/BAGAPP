const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BagApp', {

})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('Connection error:', err));

const db = mongoose.connection;

// Export the db
module.exports = db;