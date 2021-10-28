"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "OrderEntries",
      [
        {
          order_id: 1,
          bag_id: 2,
          size_id: 3,
          material_id: 2,
          bag_color: 1,
          handles_color: 1,
          bot_color: 2,
          pcs: 500,
          ind_pack: false,
          label: false,
          sticker: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("OrderEntries", null, {});
  },
};
