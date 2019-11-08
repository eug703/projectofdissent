module.exports = function(sequelize, DataType){
    var Jobs = sequelize.define("Jobs",{
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        technologies:{
            type: DataType.STRING,
            allowNull: false,
        },
        budget: {
            type: DataType.STRING,
            allowNull: false,
        },
        description: {
            type: DataType.TEXT,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        }
    });
    return Jobs;
};