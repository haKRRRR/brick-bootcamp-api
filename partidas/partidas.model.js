const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        blancos_abatidos: { type: DataTypes.INTEGER, allowNull: false },
        tiempo: { type: DataTypes.TIME, allowNull: false },
        puntuacion: { type: DataTypes.INTEGER, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Partida', attributes, options);
}




