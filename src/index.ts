// import errorHandler from "errorhandler";

import app from "./app";
import logger from "./logging/logger";


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    logger.info(
        `App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`,
    );
    logger.info("Press CTRL-C to stop\n");
});



server.on('error', onError);

/**
 * Normalize a port into a number, string, or false.
 */


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
    console.log("error");
  if (error.syscall !== 'listen') {
    throw error;
  }

  
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(app.get("port") + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(app.get("port") + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

process.on('SIGINT', function() {
  console.log("closing the app");
  process.exit(1);
});

module.exports = server;