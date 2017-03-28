const logger = require('../lib/logger');

module.exports = function(sequelize, DataTypes) {
    const Tag = sequelize.define('Tag', {
        name: DataTypes.STRING
    }, {
        indexes: [{
            fields: ['tagId']
        }],

        classMethods: {
            associate: function(m) {
                Tag.belongsTo(m.Taging, {
                    as: 'tagingId', foreignKey: 'tagId'
                });
            },
        }
    });

    return Tag;
};