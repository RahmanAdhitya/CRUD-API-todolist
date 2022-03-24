const moment = require('moment');
const fs = require('fs');

const logging = (req, res, next) => {
  const logFormat = `${moment().format('hh:mm DD/MM/YYYY')}`;
  const httpMethode = req.method;
  const path = req.path;
  const route = req.routes;
  fs.appendFileSync(`${__dirname}/.logs`, `${httpMethode} ${path} ${logFormat}` + '\n');
  console.log(`${httpMethode} "${path}" ${logFormat}`);
  next();
};

module.exports = logging;
