const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Aluno = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    }
}, {
    sequelize,
    tableName: name
});

Aluno.associate = (models) => {
    Aluno.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Aluno.belongsToMany(models.hardskill, {
        through: 'aluno_hardskill',
        timestamps:false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'hardskills'
    })

    Aluno.belongsToMany(models.turma, {
        through: 'aluno_turma',
        timestamps:false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'turmas'
    })

    Aluno.belongsTo(models.curso, {
        foreignKey: {
            name: 'id_curso'
        },
        as: 'curso'
    })
}

module.exports = Aluno;