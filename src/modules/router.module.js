/**
 * <h2> Package module </h2>
 *
 * Module permettant d'exposer les routes de l'API
 */


const users = require('../routes/Users.route');


module.exports = app => {
  logger.info('ROUTER MODULE STARTED');
  
  // exemple Users Api
  app.use('/paprika/api/users', users);

};
