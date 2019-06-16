//require('express-async-errors');
const winston= require('winston');
const express= require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

/* process.on('uncaughtException', (ex) => {
    console.log("We got an uncaught exception");
    winston.error(ex.message, ex);
}); */


// throw new Error("Something failed during STARTUP!");

const port= process.env.PORT || 3000;
const server= app.listen(port, () => winston.info('Listening on port ${port}'));   

module.exports= server;