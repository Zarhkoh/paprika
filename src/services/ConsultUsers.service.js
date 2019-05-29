/**
 * <h2> Package service </h2>
 *
 */
const usersBuilder = require("../builders/Users.builder");
   
  module.exports.getUsers = () => {
    new Promise(async (resolve, reject) => {
 try{
       await usersBuilder.getUsers()
       .then(async data => {
         resolve(data);
    });
  }
   catch (err) {
    reject({
      status: err.status,
      message: err.message
    });
  }

});
  }
