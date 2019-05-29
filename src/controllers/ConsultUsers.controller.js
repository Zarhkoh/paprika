/**
 * <h2> Package controller </h2>
 * @module controller/Users
 *
 */

const usersService = require('../services/ConsultUsers.service');

exports.users = (req, res) => {
    usersService
        .getUsers()
        .then(() => {
            res.status(200).send();
        })
        .catch(error =>
            res.status(error.status).send(error.message)
        );
};


