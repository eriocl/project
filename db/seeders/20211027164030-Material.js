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
      "Materials",
      [
        { name: "Спанбонд", price: 300, description: 'Нетканый материал из расплава полимера' },
        { name: "Бязь", price: 400, description: 'Хлопчатобумажная плотная ткань полотняного переплутения' },
        { name: "Саржа", price: 500, description: 'Плотная, натуральная, хлопковая ткань' },
        { name: "Двунитка", price: 600, description: 'Высокопрочная хлопковая ткань полотняного переплетения в две нити' },
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
    await queryInterface.bulkDelete("Materials", null, {});
  },
};
