const logger = require('../lib/logger');

module.exports = function(sequelize, DataTypes) {
    const Rename = sequelize.define('Rename', {
        prev_id: DataTypes.INTEGER,
        next_id: DataTypes.INTEGER,
        renamed_at: DataTypes.DATE,
        name: DataTypes.STRING,
        comment: DataTypes.STRING
    }, {
        indexes: [{
            fields: ['renameId']
        }],

        classMethods: {
            associate: function(m) {
                Place.belongsTo(m.Order, {
                    as: 'placeId', foreignKey: 'renameId'
                });
                Order.belongsTo(m.ClientDetails, {
                    as: 'client', foreignKey: 'clientId'
                });
                Order.belongsTo(m.DriverDetails, {
                    as: 'driver', foreignKey: 'driverId'
                });
                Order.belongsTo(m.OperatorDetails, {
                    as: 'operator', foreignKey: 'operatorId'
                });
                Order.belongsTo(m.Special, {
                    as: 'special', foreignKey: 'specialId'
                });

                Order.belongsToMany(m.Options, {
                    as: 'orderOptions', through: 'OrderOptions'
                });

                Order.hasMany(m.OrderAddress, {
                    as: 'unorderedAddresses', foreignKey: 'OrderId'
                });
            },
        }
    });

    return Order;
};
