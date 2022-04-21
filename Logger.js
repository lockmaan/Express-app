const moment = require('moment');


function logger(req,res,next){
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}\n`,
        `>${moment().format()}`
    );
    next();
}

module.exports = logger;