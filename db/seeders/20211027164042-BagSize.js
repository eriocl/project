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
      "BagSizes",
      [
        { bag_id: 1, size_id: 1, material_id: 1 },
        { bag_id: 1, size_id: 1, material_id: 2 },
        { bag_id: 1, size_id: 1, material_id: 3 },
        { bag_id: 1, size_id: 1, material_id: 4 },
        { bag_id: 1, size_id: 2, material_id: 1 },
        { bag_id: 1, size_id: 2, material_id: 2 },
        { bag_id: 1, size_id: 2, material_id: 3 },
        { bag_id: 1, size_id: 2, material_id: 4 },
        { bag_id: 1, size_id: 3, material_id: 1 },
        { bag_id: 1, size_id: 3, material_id: 2 },
        { bag_id: 1, size_id: 3, material_id: 3 },
        { bag_id: 1, size_id: 3, material_id: 4 },
        { bag_id: 1, size_id: 4, material_id: 1 },
        { bag_id: 1, size_id: 4, material_id: 2 },
        { bag_id: 1, size_id: 4, material_id: 3 },
        { bag_id: 1, size_id: 4, material_id: 4 },

        { bag_id: 2, size_id: 1, material_id: 1 },
        { bag_id: 2, size_id: 1, material_id: 2 },
        { bag_id: 2, size_id: 1, material_id: 3 },
        { bag_id: 2, size_id: 1, material_id: 4 },
        { bag_id: 2, size_id: 2, material_id: 1 },
        { bag_id: 2, size_id: 2, material_id: 2 },
        { bag_id: 2, size_id: 2, material_id: 3 },
        { bag_id: 2, size_id: 2, material_id: 4 },
        { bag_id: 2, size_id: 3, material_id: 1 },
        { bag_id: 2, size_id: 3, material_id: 2 },
        { bag_id: 2, size_id: 3, material_id: 3 },
        { bag_id: 2, size_id: 3, material_id: 4 },
        { bag_id: 2, size_id: 4, material_id: 1 },
        { bag_id: 2, size_id: 4, material_id: 2 },
        { bag_id: 2, size_id: 4, material_id: 3 },
        { bag_id: 2, size_id: 4, material_id: 4 },

        { bag_id: 3, size_id: 1, material_id: 1 },
        { bag_id: 3, size_id: 1, material_id: 2 },
        { bag_id: 3, size_id: 1, material_id: 3 },
        { bag_id: 3, size_id: 1, material_id: 4 },
        { bag_id: 3, size_id: 2, material_id: 1 },
        { bag_id: 3, size_id: 2, material_id: 2 },
        { bag_id: 3, size_id: 2, material_id: 3 },
        { bag_id: 3, size_id: 2, material_id: 4 },
        { bag_id: 3, size_id: 3, material_id: 1 },
        { bag_id: 3, size_id: 3, material_id: 2 },
        { bag_id: 3, size_id: 3, material_id: 3 },
        { bag_id: 3, size_id: 3, material_id: 4 },
        { bag_id: 3, size_id: 4, material_id: 1 },
        { bag_id: 3, size_id: 4, material_id: 2 },
        { bag_id: 3, size_id: 4, material_id: 3 },
        { bag_id: 3, size_id: 4, material_id: 4 },

        { bag_id: 4, size_id: 1, material_id: 1 },
        { bag_id: 4, size_id: 1, material_id: 2 },
        { bag_id: 4, size_id: 1, material_id: 3 },
        { bag_id: 4, size_id: 1, material_id: 4 },
        { bag_id: 4, size_id: 2, material_id: 1 },
        { bag_id: 4, size_id: 2, material_id: 2 },
        { bag_id: 4, size_id: 2, material_id: 3 },
        { bag_id: 4, size_id: 2, material_id: 4 },
        { bag_id: 4, size_id: 3, material_id: 1 },
        { bag_id: 4, size_id: 3, material_id: 2 },
        { bag_id: 4, size_id: 3, material_id: 3 },
        { bag_id: 4, size_id: 3, material_id: 4 },
        { bag_id: 4, size_id: 4, material_id: 1 },
        { bag_id: 4, size_id: 4, material_id: 2 },
        { bag_id: 4, size_id: 4, material_id: 3 },
        { bag_id: 4, size_id: 4, material_id: 4 },
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
    await queryInterface.bulkDelete("BagSizes", null, {});
  },
};
