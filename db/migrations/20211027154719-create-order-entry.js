'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderEntries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bag_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      size_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      material_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bag_color: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      handles_color: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bot_color: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pcs: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ind_pack: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      label: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      sticker: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_STAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_STAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderEntries');
  }
};