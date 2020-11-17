Promise = require('bluebird');
const app = require('./config/express');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const { port, env } = require('./config/vars');

const error = chalk.bold.red;
const success = chalk.bold.green;

/**
     * Start Express server.
     */
app.listen(port, () => {
    console.log(success(`${logSymbols.success} App is running at http://localhost:${port} in ${env} mode.`));
    console.log('Press CTRL-C to stop\n');
});

/**
* Exports express
* @public
*/
module.exports = app;
