/**
 * <h2> Package builder </h2>
 * @module builder/Users
 *
 */
const db = require('../config/db.config');

let err;
let usager;


module.exports.getAllUsers = async () => {
  [err, users] = await to(
    db.models.Users.findAll()
  );

  if (err) throw err;
  return statutDemande;
};