const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});
connectDB();

// setup express object and routes
const app = express();
app.use(express.json());
app.use(cookieParser());

// listening to request on port 5000
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log('Server is running in', process.env.NODE_ENV, 'mode in port', PORT));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});