import {DataTypes} from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  },
);

export default User;
