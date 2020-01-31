'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      idproduct: {
        type: Sequelize.STRING
      },
      idadditional: {
        type: Sequelize.DECIMAL
      },
      idorder: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      });
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Item');
  }
};