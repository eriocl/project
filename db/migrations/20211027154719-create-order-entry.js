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
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        }
      },
      bag_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bags',
          key: 'id',
        }
      },
      size_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        }
      },
      material_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Materials',
          key: 'id',
        }
      },
      bag_color: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        }
      },
      handles_color: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        }
      },
      bot_color: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        }
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderEntries');
  }
};