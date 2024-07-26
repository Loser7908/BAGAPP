const mongoose = require('mongoose');

const URL="mongodb+srv://rishi:etpe5GmpPUzHDxmL@cluster0.tuukkxt.mongodb.net/BAGAPP";

mongoose.connect('mongodb+srv://rishi:etpe5GmpPUzHDxmL@cluster0.tuukkxt.mongodb.net/BAGAPP', {
 
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('Connection error:', err));

const db = mongoose.connection;

// Export the db
module.exports = db;



