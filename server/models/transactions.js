module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define("transactions", {
        dateTime: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }

    })

    return Transactions;
}