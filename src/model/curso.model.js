const { DataTypes, Model } = require('sequelize');
const database = require('../database');

class Curso extends Model{}

Curso.init(
    {
        descricao:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        coordenador:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize: database,
        tableName: 'curso'
    }
);

module.exports = Curso;