const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Employee = sequelize.define("Employee", {
  name: { type: DataTypes.STRING, allowNull: false },
  position: DataTypes.STRING,
  age: DataTypes.INTEGER,
  salary: { type: DataTypes.FLOAT, defaultValue: 0.0 },
});

module.exports = Employee;
