import {DataTypes} from 'sequelize';
import sequelize from '../sequelize.js';
import User from './user.js';

const Payment = sequelize.define(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: 'payments',
    timestamps: true,
  },
);

export default Payment;
