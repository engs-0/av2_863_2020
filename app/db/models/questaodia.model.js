const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const QuestaoDia = sequelize.define(name,{
    descricao: {
        type: DataTypes.TEXT
    },
    resposta: {
        type: DataTypes.TEXT
    },
    correta: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'Criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'Atualizado_em'
    }
},{
    sequelize,
    tableName: name
});

QuestaoDia.associate = (models) => {
    QuestaoDia.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })
}

module.exports = QuestaoDia;