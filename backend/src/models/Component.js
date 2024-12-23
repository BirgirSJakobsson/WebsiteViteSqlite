const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Component = sequelize.define('Component', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Achievement', 'SocialLink', 'ImageContainer']]
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  imageUrl: {
    type: DataTypes.STRING
  },
  link: {
    type: DataTypes.STRING
  },
  metadata: {
    type: DataTypes.JSON
  }
}, {
  // Optional: customize table name
  tableName: 'components'
});

module.exports = Component;
