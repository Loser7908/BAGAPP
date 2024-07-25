const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rishibakshi1234:rishibakshi1234@cluster0.tuukkxt.mongodb.net/', {

})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('Connection error:', err));

const db = mongoose.connection;

// Export the db
module.exports = db;
