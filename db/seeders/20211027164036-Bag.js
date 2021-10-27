'use strict';

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
        "Bags",
        [
          { name: "Вариант 1", price: 300},
          { name: "Вариант 2", price: 300},
          { name: "Вариант 3", price: 300},
          { name: "Вариант 4", price: 300},
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
    await queryInterface.bulkDelete('Bags', null, {});
  }
};
