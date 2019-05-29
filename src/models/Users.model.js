/**
 * <h2> Package model </h2>
 *
 * Définition de l'entité "Users"
 *
 */


module.exports = (sequelize, Sequelize) => {
    const Auth = sequelize.define(
        "users",
        {
            id_user: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            login: {
                type: Sequelize.STRING(45),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            nom: {
                type: Sequelize.STRING(45),
                allowNull: false
            }
        },
        {
            tableName: "users",
            underscored: true,
            timestamps: false,
            freezeTableName: true
        }
    );

   
};
