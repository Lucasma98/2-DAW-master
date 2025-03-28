const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://mongo:27017/appdb', {
useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB'))
 .catch((err) => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
}); 
