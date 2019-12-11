const Sequelize = require('sequelize');

class User extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                username: DataTypes.STRING(50),
                email: DataTypes.STRING(50),
            },
            {
                sequelize,
                createdAt: 'createdOn',
                updatedAt: 'updatedOn',
                freezeTableName: true
            }
        );
    }

    static associate(models) {

    }
}

module.exports = User;
